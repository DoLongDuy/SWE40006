import AssetWrapper from "./assetWrapper";
import { useTheme } from "~/layouts/ThemeContext";
import TradingHistoryTable from "~/components/TradingHistory/trading-history";
import { Row, Col } from "react-bootstrap";
import historyData from "./historyData.json";

function TradePage() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-dark"
    : "text-bg-light bg-body";

  return (
    <div className={`mx-2 ${themeClass}`}>
      <AssetWrapper />
      
    </div>
  );
}
export default TradePage;
