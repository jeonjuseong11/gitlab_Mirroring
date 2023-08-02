import React from "react";
import { TermUl, TermWrapper } from "../styles/TermsStyle";

const TermPravate = () => {
  return (
    <div>
      <h1>HIGHWAY 개인정보 처리방침</h1>
      <TermWrapper>
        HIGHWAY(하이웨이)(이하 '회사'라고 합니다)은(는) 개인정보보호법 등 관련
        법령상의 개인정보보호 규정을 준수하며 귀하의 개인정보보호에 최선을
        다하고 있습니다. 회사는 개인정보보호법에 근거하여 다음과 같은 내용으로
        개인정보를 수집 및 처리하고자 합니다. 다음의 내용을 자세히 읽어보시고
        모든 내용을 이해하신 후에 동의 여부를 결정해주시기 바랍니다.
        <TermUl style={{ listStyle: "none" }}>
          <h4>제1조(개인정보 수집 및 이용 목적)</h4>
          <li>
            이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 목적 이외의
            용도로는 사용되지 않습니다.
            <TermUl style={{ listStyle: "none" }}>
              <li>- 본인확인</li>
            </TermUl>
          </li>
        </TermUl>
        <TermUl style={{ listStyle: "none" }}>
          <h4>제2조(개인정보 수집 및 이용 항목)</h4>
          <li>
            회사는 개인정보 수집 목적을 위하여 다음과 같은 정보를 수집합니다.
            <TermUl style={{ listStyle: "none" }}>
              <li>- 성명, 이메일, 성별 및 생년월일</li>
            </TermUl>
          </li>
        </TermUl>
        <TermUl style={{ listStyle: "none" }}>
          <h4>제3조(개인정보 보유 및 이용 기간)</h4>
          <li>
            1.수집한 개인정보는 수집·이용 동의일로부터 개인정보 수집·이용 목적을
            달성할 때까지 보관 및 이용합니다.
          </li>
          <li>
            2.개인정보 보유기간의 경과, 처리목적의 달성 등 개인정보가 불필요하게
            되었을 때에는 지체없이 해당 개인정보를 파기합니다.
          </li>
        </TermUl>
        <TermUl style={{ listStyle: "none" }}>
          <h4>제4조(동의 거부 관리)</h4>
          <li>
            귀하는 본 안내에 따른 개인정보 수집·이용에 대하여 동의를 거부하실 수
            있으며, 이에 따른 불이익은 없습니다.
          </li>
        </TermUl>
        본인은 위의 동의서 내용을 충분히 숙지하였으며,위와 같이 개인정보를
        수집·이용하는데 동의합니다.
      </TermWrapper>
    </div>
  );
};

export default TermPravate;
