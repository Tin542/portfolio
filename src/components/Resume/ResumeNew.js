import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/CV_NguyenThanhTin.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [renderNavButtons, setRenderNavButtons] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onSuccess = () => {
    setPageNumber(1);
    setRenderNavButtons(true);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };
  const previousPage = () => {
    changePage(-1);
  };
  const nextPage = () => {
    changePage(+1);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setRenderNavButtons(true);
              onSuccess();
            }}
            className="d-flex justify-content-center">
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "20px",
          }}>
          {renderNavButtons && (
            <div>
              <Button
                disabled={pageNumber <= 1}
                onClick={previousPage}
                variant="primary">
                Prev
              </Button>
              &nbsp;Page {pageNumber || (numPages ? 1 : "--")} of{" "}
              {numPages || "--"}&nbsp;
              <Button
                disabled={pageNumber === numPages}
                onClick={nextPage}
                variant="primary">
                Next
              </Button>
            </div>
          )}
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
