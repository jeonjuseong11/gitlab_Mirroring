import React from "react";
import { TermWrapper } from "../../styles/TermsStyle";

const YoungPrivate = () => {
  return (
    <TermWrapper>
      <h1>HIGHWAY 청소년 보호정책</h1>
      <div
        style={{
          height: "30vh",
          overflow: "scroll",
          border: "1px solid gray",
          borderRadius: "10px",
          marginBottom: "3rem",
        }}
      >
        <p>
          네이버 주식회사 ("회사" 또는 "네이버"라 함)는 청소년이 건전한 인격체로
          성장할 수 있도록 하기 위하여 청소년 보호정책을 수립, 시행하고
          있습니다. 회사는 청소년들이 유해정보에 접근할 수 없도록 방지하고 있는
          바, 본 청소년 보호정책을 통하여 회사가 청소년보호를 위해 어떠한 조치를
          취하고 있는지 알려드립니다.
        </p>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>1. 유해정보에 대한 청소년접근제한 및 관리조치</h4>
          <li>
            회사는 청소년이 아무런 제한장치 없이 청소년 유해정보에 노출되지
            않도록 별도의 인증장치를 마련, 적용하며 청소년 유해정보가 노출되지
            않기 위한 예방차원의 조치를 강구합니다.
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>2. 유해정보로부터의 청소년보호를 위한 업무 담당자 교육 시행</h4>
          <li>
            회사는 정보통신업무 종사자를 대상으로 청소년보호 관련 법령 및
            제재기준, 유해정보 발견시 대처방법, 위반사항 처리에 대한 보고절차
            등을 교육하고 있습니다.
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>3. 유해정보로 인한 피해상담 및 고충처리</h4>
          <li>
            회사는 청소년 유해정보로 인한 피해상담 및 고충처리를 위한 전문인력을
            배치하여 그 피해가 확산되지 않도록 하고 있습니다.
          </li>
          <li>
            이용자 분들께서는 하단에 명시한 "4. 네이버 청소년보호 책임자 및
            담당자의 소속, 성명 및 연락처" 항을 참고하여 전화나 메일을 통하여
            피해상담 및 고충처리를 요청할 수 있습니다.
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>4. 네이버 청소년보호 책임자 및 담당자의 소속, 성명 및 연락처</h4>
          <li>
            네이버는 청소년들이 좋은 정보를 안전하게 이용할 수 있도록 최선을
            다하고 있습니다.
          </li>
        </ul>
      </div>
    </TermWrapper>
  );
};

export default YoungPrivate;
