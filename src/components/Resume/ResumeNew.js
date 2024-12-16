import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [loadError, setLoadError] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoized PDF scale calculation
  const pageScale = useMemo(() => {
    return width > 786 ? 1.7 : 0.6;
  }, [width]);

  // Handle PDF load success
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoadError(false);
  };

  // Handle PDF load error
  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setLoadError(true);
  };

  // Render PDF pages or error message
  const renderPdfContent = () => {
    if (loadError) {
      return (
        <div className="text-center text-danger my-4">
          <h4>Unable to Load Resume</h4>
          <p>There was an issue displaying the PDF. Please try again later.</p>
        </div>
      );
    }

    if (!numPages) {
      return (
        <div className="d-flex justify-content-center align-items-center my-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return Array.from(new Array(numPages), (el, index) => (
      <Page 
        key={`page_${index + 1}`}
        pageNumber={index + 1}
        scale={pageScale}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        onRenderError={(error) => {
          console.error(`Error rendering page ${index + 1}:`, error);
        }}
      />
    ));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        <Row className="resume justify-content-center">
          <Document 
            file="/resumes.pdf"  // Path to PDF in the public folder
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            className="d-flex flex-column align-items-center"
          >
            {renderPdfContent()}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;