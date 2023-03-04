import { useLocation, useNavigate } from "react-router-dom";
import SummaryCSS from "./summary.module.css";

function Summary() {
  const location = useLocation();
  const data = location.state.data;

  const navigate = useNavigate();

  const Data = {
    formName: data.sumName,
    formPremiered: data.sumPremiered,
  };

  function handleClick() {
    navigate("/form", { state: { data: Data } });
  }

  return (
    <>
      <div className={SummaryCSS.container}>
        <div className={SummaryCSS.container__img}>
          <img
            src={data.sumImg != null ? data.sumImg.original : "NoIMG"}
            alt="No Img Available"
            height="200px"
            width="200px"
          />
        </div>

        <div className={SummaryCSS.container__body}>
          <span className={SummaryCSS.title__name}>{data.sumName}</span>
          <p>
            <span>{data.sumPremiered != null ? data.sumPremiered : "-No Date-"}</span>
            <span>•</span>
            <span>{data.sumStatus}</span>
          </p>
          <p className={SummaryCSS.content__summary}>{data.summary}</p>
          <button onClick={handleClick}>Book Ticket</button>
        </div>
      </div>
    </>
  );
}
export default Summary;
