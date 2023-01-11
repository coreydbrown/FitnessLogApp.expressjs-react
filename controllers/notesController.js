import Note from "../models/Note.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

const createNote = async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;

  const note = await Note.create(req.body);

  res.status(StatusCodes.CREATED).json({ note });
};

const getAllNotes = async (req, res) => {
  const notes = await Note.find({ createdBy: req.user.userId });

  res.status(StatusCodes.OK).json({ notes });
};

const updateNote = async (req, res) => {
  const { id: noteId } = req.params;
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    throw new BadRequestError("Please provide all values");
  }

  const note = await Note.findOne({ _id: noteId });

  if (!note) {
    throw new NotFoundError(`No note with ID: ${noteId}`);
  }

  checkPermissions(req.user, note.createdBy);

  const updatedNote = await Note.findOneAndUpdate({ _id: noteId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(StatusCodes.OK).json({ updatedNote });
};

const deleteNote = async (req, res) => {
  const { id: noteId } = req.params;

  const note = await Note.findOne({ _id: noteId });

  if (!note) {
    throw new NotFoundError(`No note with ID: ${noteId}`);
  }

  checkPermissions(req.user, note.createdBy);

  await note.remove();

  res.status(StatusCodes.OK).json({ msg: "Successfully deleted note" });
};

export { getAllNotes, createNote, updateNote, deleteNote };
