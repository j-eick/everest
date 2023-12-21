import Layout from "../components/Layout";

export default function Limbus({ windowsSize }) {
  const renderResolution = () => {
    return `${windowsSize.width} px * ${windowsSize.height} px`;
  };

  return (
    <Layout>
      <ul style={{ textAlign: "center" }}>
        <li>
          <p style={{ fontSize: "2.75rem", padding: "80px 0px" }}>
            Optimized for min. 1300px x 750px
          </p>
        </li>
        <li>
          <p style={{ fontSize: "2.5rem", lineHeight: "1.5" }}>
            Español: Optimizado como minimo para 1300px x 750px
          </p>
        </li>
        <li>
          <p
            style={{
              fontSize: "2.5rem",
              fontFamily: "var(--fontFamily-diphylleia)",
              lineHeight: "2",
            }}
          >
            한국어: 최소{" "}
            <span style={{ fontSize: "2.2rem" }}>1300px x 750px</span> 에
            최적화되었습니다
          </p>
        </li>
        <li>
          <p style={{ fontSize: "2.5rem" }}>
            Nepalese: न्यूनतम १३००पिक्सेल x ७५०पिक्सेल को लागि अनुकूलित
          </p>
        </li>
      </ul>
      <div style={{ fontSize: "2.5rem" }}>
        <p style={{ paddingBottom: "2rem", textDecoration: "underline" }}>
          Your current resolution:
        </p>
        {renderResolution()}
      </div>
    </Layout>
  );
}
