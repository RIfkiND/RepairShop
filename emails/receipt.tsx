import {
    Body,
    Container,
    Column,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const AppleReceiptEmail = () => (
    <Html>
      <Head />
      <Preview>Repair Receipt</Preview>
  
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Img
                  src={`${baseUrl}/static/favicon.png`}
                  width="80"
                  height="80  "
                  alt="DeRepair"
                />
              </Column>
  
              <Column align="right" style={tableCell}>
                <Text style={heading}>Repair Receipt</Text>
              </Column>
            </Row>
          </Section>
          <Section>
            <Text style={cupomText}>
              Save 3% on all your Device Repair With Coupon.
              <sup style={supStyle}>1</sup>{" "}
              <Link href="">
                Apply and use in minutes
              </Link>
              <sup style={supStyle}>2</sup>
            </Text>
          </Section>
          <Section style={informationTable}>
            <Row style={informationTableRow}>
              <Column colSpan={2}>
                <Section>
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>Request ID</Text>
                      <Link
                        style={{
                          ...informationTableValue,
                          color: "#15c",
                          textDecoration: "underline",
                        }}
                      >
                       User Email Here
                      </Link>
                    </Column>
                  </Row>
  
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>INVOICE DATE</Text>
                      <Text style={informationTableValue}>Date HERE</Text>
                    </Column>
                  </Row>
  
                  <Row>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>ORDER ID</Text>
                      <Link
                        style={{
                          ...informationTableValue,
                          color: "#15c",
                          textDecoration: "underline",
                        }}
                      >
                        ML4F5L8522
                      </Link>
                    </Column>
                    <Column style={informationTableColumn}>
                      <Text style={informationTableLabel}>DOCUMENT NO.</Text>
                      <Text style={informationTableValue}>186623754793</Text>
                    </Column>
                  </Row>
                </Section>
              </Column>
              <Column style={informationTableColumn} colSpan={2}>
                <Text style={informationTableLabel}>From</Text>
                <Text style={informationTableValue}>
                  Jlnt Rumah Sakit 06 (Ciamis)
                </Text>
                <Text style={informationTableValue}>De Repair</Text>
                <Text style={informationTableValue}>Jawa Barat, 46211</Text>
                <Text style={informationTableValue}>Indonesia</Text>
              </Column>
            </Row>
          </Section>
          <Section style={productTitleTable}>
            <Text style={productsTitle}>App Store</Text>
          </Section>
          <Section>
            <Row>
              <Column style={{ width: "64px" }}>
                <Img
                  src={`${baseUrl}/static/MoboA.png`}
                  width="64"
                  height="64"
                  alt="Name Here"
                  style={productIcon}
                />
              </Column>
              <Column style={{ paddingLeft: "22px" }}>
                <Text style={productTitle}>MotherBoard</Text>
                <Link
                  style={productLink}
                >
                 Category
                </Link>
                <span style={divisor}>|</span>
                <Link
                 
                  style={productLink}
                  
                >
                  Brand
                </Link>
                <span style={divisor}>|</span>
                <Link
                 
                  style={productLink}
                  
                >
                  Model
                </Link>
              </Column>
  
              <Column style={productPriceWrapper} align="right">
                <Text style={productPrice}>RP.20000,00</Text>
              </Column>
            </Row>
          </Section>
          <Hr style={productPriceLine} />
          <Section align="right">
            <Row>
              <Column style={tableCell} align="right">
                <Text style={productPriceTotal}>TOTAL</Text>
              </Column>
              <Column style={productPriceVerticalLine}></Column>
              <Column style={productPriceLargeWrapper}>
                <Text style={productPriceLarge}>Rp.20000,</Text>
              </Column>
            </Row>
          </Section>
          <Hr style={productPriceLineBottom} />

          <Section>
            <Row>
              <Column align="center" style={footerIcon}>
                <Img
                  src={`${baseUrl}/static/favicon.png`}
                  width="65"
                  height="65"
                  alt="DeRepair"
                />
              </Column>
            </Row>
          </Section>
          <Text style={footerLinksWrapper}>
            <Link href="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary?mt=8">
              Account Settings
            </Link>{" "}
            •{" "}
            <Link href="https://www.apple.com/legal/itunes/us/sales.html">
              Terms of Sale
            </Link>{" "}
            •{" "}
            <Link href="https://www.apple.com/legal/privacy/">
              Privacy Policy{" "}
            </Link>
          </Text>
          <Text style={footerCopyright}>
            Copyright © 2023 Apple Inc. <br />{" "}
            <Link href="https://www.apple.com/legal/">All rights reserved</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  export default AppleReceiptEmail;
  
  const main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: "#ffffff",
  };
  
  const resetText = {
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "660px",
    maxWidth: "100%",
  };
  
  const tableCell = { display: "table-cell" };
  
  const heading = {
    fontSize: "32px",
    fontWeight: "300",
    color: "#888888",
  };
  
  const cupomText = {
    textAlign: "center" as const,
    margin: "36px 0 40px 0",
    fontSize: "14px",
    fontWeight: "500",
    color: "#111111",
  };
  
  const supStyle = {
    fontWeight: "300",
  };
  
  const informationTable = {
    borderCollapse: "collapse" as const,
    borderSpacing: "0px",
    color: "rgb(51,51,51)",
    backgroundColor: "rgb(250,250,250)",
    borderRadius: "3px",
    fontSize: "12px",
  };
  
  const informationTableRow = {
    height: "46px",
  };
  
  const informationTableColumn = {
    paddingLeft: "20px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "0px 1px 1px 0px",
    height: "44px",
  };
  
  const informationTableLabel = {
    ...resetText,
    color: "rgb(102,102,102)",
    fontSize: "10px",
  };
  
  const informationTableValue = {
    fontSize: "12px",
    margin: "0",
    padding: "0",
    lineHeight: 1.4,
  };
  
  const productTitleTable = {
    ...informationTable,
    margin: "30px 0 15px 0",
    height: "24px",
  };
  
  const productsTitle = {
    background: "#fafafa",
    paddingLeft: "10px",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0",
  };
  
  const productIcon = {
    margin: "0 0 0 20px",
    borderRadius: "14px",
    border: "1px solid rgba(128,128,128,0.2)",
  };
  
  const productTitle = { fontSize: "12px", fontWeight: "600", ...resetText };
  
  const productDescription = {
    fontSize: "12px",
    color: "rgb(102,102,102)",
    ...resetText,
  };
  
  const productLink = {
    fontSize: "12px",
    color: "rgb(0,112,201)",
    textDecoration: "none",
  };
  
  const divisor = {
    marginLeft: "4px",
    marginRight: "4px",
    color: "rgb(51,51,51)",
    fontWeight: 200,
  };
  
  const productPriceTotal = {
    margin: "0",
    color: "rgb(102,102,102)",
    fontSize: "10px",
    fontWeight: "600",
    padding: "0px 30px 0px 0px",
    textAlign: "right" as const,
  };
  
  const productPrice = {
    fontSize: "12px",
    fontWeight: "600",
    margin: "0",
  };
  
  const productPriceLarge = {
    margin: "0px 20px 0px 0px",
    fontSize: "16px",
    fontWeight: "600",
    whiteSpace: "nowrap" as const,
    textAlign: "right" as const,
  };
  
  const productPriceWrapper = {
    display: "table-cell",
    padding: "0px 20px 0px 0px",
    width: "100px",
    verticalAlign: "top",
  };
  
  const productPriceLine = { margin: "30px 0 0 0" };
  
  const productPriceVerticalLine = {
    height: "48px",
    borderLeft: "1px solid",
    borderColor: "rgb(238,238,238)",
  };
  
  const productPriceLargeWrapper = { display: "table-cell", width: "90px" };
  
  const productPriceLineBottom = { margin: "0 0 75px 0" };
  
  const block = { display: "block" };
  
  const ctaTitle = {
    display: "block",
    margin: "15px 0 0 0",
  };
  
  const ctaText = { fontSize: "24px", fontWeight: "500" };
  
  const walletWrapper = { display: "table-cell", margin: "10px 0 0 0" };
  
  const walletLink = { color: "rgb(0,126,255)", textDecoration: "none" };
  
  const walletImage = {
    display: "inherit",
    paddingRight: "8px",
    verticalAlign: "middle",
  };
  
  const walletBottomLine = { margin: "65px 0 20px 0" };
  
  const footerText = {
    fontSize: "12px",
    color: "rgb(102,102,102)",
    margin: "0",
    lineHeight: "auto",
    marginBottom: "16px",
  };
  
  const footerTextCenter = {
    fontSize: "12px",
    color: "rgb(102,102,102)",
    margin: "20px 0",
    lineHeight: "auto",
    textAlign: "center" as const,
  };
  
  const footerLink = { color: "rgb(0,115,255)" };
  
  const footerIcon = { display: "block", margin: "40px 0 0 0" };
  
  const footerLinksWrapper = {
    margin: "8px 0 0 0",
    textAlign: "center" as const,
    fontSize: "12px",
    color: "rgb(102,102,102)",
  };
  
  const footerCopyright = {
    margin: "25px 0 0 0",
    textAlign: "center" as const,
    fontSize: "12px",
    color: "rgb(102,102,102)",
  };
  
  const walletLinkText = {
    fontSize: "14px",
    fontWeight: "400",
    textDecoration: "none",
  };
  