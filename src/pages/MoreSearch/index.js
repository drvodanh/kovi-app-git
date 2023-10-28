import className from "classnames/bind";
import style from "./MoreSearch.module.scss";
const cx = className.bind(style);

function MoreSearch() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("row")}>
        <div className={cx("col-12")}>
          <div className={cx("title")}>
            <p>Từ tìm kiếm:</p>
          </div>
        </div>
        <div className={cx("col-12")}>
          <header className={cx("header")}>
            <div className={cx("row")}>
              <div className={cx("col-4")}>
                <div>
                  <p>Từ điển</p>
                </div>
              </div>
              <div className={cx("col-4")}>
                <div>
                  <p>Chia động từ</p>
                </div>
              </div>
              <div className={cx("col-4")}>
                <div>
                  <p>Ví dụ</p>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className={cx("col-12")}>
          <div className={cx("content")}>content</div>
        </div>
      </div>
    </div>
  );
}

export default MoreSearch;
