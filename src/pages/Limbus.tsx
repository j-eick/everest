import Layout from "../components/Layout";

export default function Limbus() {
  return (
    <Layout>
      <ul>
        <li>
          <p style={{ fontSize: "2.5rem", paddingBottom: "70px" }}>
            न्यूनतम १३००पिक्सेल x ७५०पिक्सेल को लागि अनुकूलित
          </p>
        </li>
        <li>
          <p style={{ fontSize: "2.75rem" }}>
            Optimized for min. 1300px x 750px
          </p>
        </li>
        <li>
          <p style={{ fontSize: "2.75rem", lineHeight: "2" }}>
            Optimizado para al menos 1300px x 750px
          </p>
        </li>
        <li>
          <p
            style={{
              fontSize: "2.5rem",
              fontFamily: "var(--fontFamily-diphylleia)",
            }}
          >
            최소 <span style={{ fontSize: "2.5rem" }}>1300px x 750px</span> 에
            최적화되었습니다
          </p>
        </li>
      </ul>
    </Layout>
  );
}
