import React, { useState, useEffect, useMemo } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const resumePath = "./Resume.pdf";

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageScale = useMemo(() => (width > 786 ? 1.7 : 0.6), [width]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoadError(false);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF load error:', error);
    setLoadError(true);
  };

  const handleBlobDownload = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch(resumePath);
      if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.status}`);
      const pdfBlob = await response.blob();
      const blobUrl = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Resume.pdf';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(link);
        setIsDownloading(false);
      }, 100);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download the resume. Please try the 'View Resume' button instead.");
      setIsDownloading(false);
    }
  };

  const handleViewResume = () => {
    window.open(resumePath, '_blank');
  };

  const renderPdfContent = () => {
    if (loadError) {
      return <div className="text-center text-danger my-4"><h4>Unable to Load Resume</h4><p>There was an issue displaying the PDF. Please try again later.</p></div>;
    }
    if (!numPages) {
      return <div className="d-flex justify-content-center align-items-center my-4"><Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner></div>;
    }
    return Array.from(new Array(numPages), (el, index) => (
      <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={pageScale} renderTextLayer={false} renderAnnotationLayer={false} />
    ));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
          <span style={{ color: "white", fontWeight: "bold" }}>My</span> <span style={{ color: "purple" }}>Resume🧑‍💻</span>
        </h1>

        <Row className="resume justify-content-center">
          <Document file={resumePath} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError} className="d-flex flex-column align-items-center">
            {renderPdfContent()}
          </Document>
        </Row>

        {/* Download Buttons Below Resume */}
        <div className="text-center mt-4">
          <Button variant="primary" onClick={handleBlobDownload} size="lg" className="download-button me-2" disabled={isDownloading}>
            {isDownloading ? (<><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />Downloading...</>) : (<> <i className="fas fa-download me-2"></i>Download Resume </>)}
          </Button>
          <Button variant="outline-primary" onClick={handleViewResume} size="lg" className="download-button-alt">
            <i className="fas fa-external-link-alt me-2"></i>View Resume
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
