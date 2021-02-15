// when window has fully loaded
window.onload = () => {
  // select every element with the className of : "value"
  const myElement = document.querySelectorAll(".value");

  //   trigger actions each time user scrolls the page
  window.addEventListener("scroll", () => {
    //   get the screen height (viewport height)
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    //   sniff out the values returned from getBoundingClientRect()
    const {
      height,
      left,
      right,
      top,
      bottom,
      width,
      x,
      y,
    } = document.getElementById("element").getBoundingClientRect();

    // print out the values on every element matching the selector
    myElement.forEach((element) => {
      // for every element (.value class elements)
      // cook some magic
      element.innerHTML = `
        <div>
          <span>height : ${height}</span>
          <span>left : ${left}</span>
          <span>right : ${right}</span>
          <span>top : ${top}</span>
          <span>bottom : ${bottom}</span>
          <span>width : ${width}</span>
          <span>x : ${x}</span>
          <span>y : ${y}</span>
          <span> PartiallyVisible : ${
            viewportHeight - top > 0 && bottom > 0 ? "true" : "false"
          }</span>
          <span> IsFullyVisible : ${
            bottom > 0 && bottom <= viewportHeight && top >= 0
              ? "true"
              : "false"
          }</span>
        </div>
        `;
    });
  });
};
