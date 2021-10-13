import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(<Carousel photos={TEST_IMAGES} title="TestTitle" />);
});

it("matches snapshot", function () {
  const { container } = render(<Carousel photos={TEST_IMAGES} title="TestTitle" />);
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  // expect left arrow not to show.
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("hides left arrow when displaying the first image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  const leftArrow = container.querySelector(".fa-chevron-circle-left");

  // expect the left arrow to be hidden and the right arrow to show
  // instead of style expect that it is not in the document
  expect(rightArrow.getAttribute('style')).toEqual('display: inline;');
  expect(leftArrow.getAttribute('style')).toEqual('display: none;');
});

it("hides right arrow when displaying the last image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

  const leftArrow = container.querySelector(".fa-chevron-circle-left");

  // expect right arrow to be hidden and left arrow to show
  // instead of style expect that it is not in the document
  expect(rightArrow.getAttribute('style')).toEqual('display: none;');
  expect(leftArrow.getAttribute('style')).toEqual('display: inline;');
});

it("shows both arrows when displaying the second image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
    fireEvent.click(rightArrow);

  const leftArrow = container.querySelector(".fa-chevron-circle-left");


  // expect both arrows to show
  // instead of style expect that it is not in the document
  expect(rightArrow.getAttribute('style')).toEqual('display: inline;');
  expect(leftArrow.getAttribute('style')).toEqual('display: inline;');
});
