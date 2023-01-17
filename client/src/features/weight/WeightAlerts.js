import { useSelector } from "react-redux";
import SuccessAlert from "../../components/status-alerts/SuccessAlert";
import ErrorAlert from "../../components/status-alerts/ErrorAlert";

const WeightAlerts = () => {
  const statusGetAll = useSelector((state) => state.weights.statusGetAll);
  const errorGetAll = useSelector((state) => state.weights.errorGetAll);
  const statusAdd = useSelector((state) => state.weights.statusAdd);
  const errorAdd = useSelector((state) => state.weights.errorAdd);

  return (
    <>
      <SuccessAlert status={statusAdd} />
      <ErrorAlert status={statusAdd} error={errorAdd} />
      <ErrorAlert status={statusGetAll} error={errorGetAll} />
    </>
  );
};
export default WeightAlerts;
