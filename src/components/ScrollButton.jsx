import ScrollToTop from "react-scroll-to-top";

function ScrollButton() {
  return (
    <div>
      <div style={{ marginTop: "10vh" }}>
        <ScrollToTop
          smooth
          width="40px"
          color="rgb(234 88 12)"
          className="hover:scale-110 duration-200"
        ></ScrollToTop>
      </div>
    </div>
  );
}

export default ScrollButton;
