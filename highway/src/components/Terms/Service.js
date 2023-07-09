import React from "react";
import { TermWrapper } from "../../styles/TermsStyle";
const Service = () => {
  return (
    <TermWrapper>
      <h1>HIGHWAY 이용약관</h1>
      <div
        style={{
          height: "20rem",
          overflow: "scroll",
          border: "1px solid gray",
          borderRadius: "10px",
          marginBottom: "3rem",
        }}
      >
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>제 1조 (서비스 이용신청)</h4>
          <li>
            1. "회사"의 서비스를 이용하고자 하는 자(이하 "신청자")가 본 약관과
            개인정보취급방침을 읽고 "동의" 또는 "확인" 버튼을 누른 경우 본
            약관에 동의하여 신청한 것으로 간주한다.
          </li>
          <li>
            ２. "신청자"는 신청에 있어 "회사"에게 사업자정보와 신청자 본인
            여부를 확인하기 위해 인증에 필요한 정보를 제공하여야 하며,
            전문기관을 통한 인증 절차를 거칠 수 있다.
          </li>
          <li>
            ３. "회사"는 인증 과정에서 필요 시 "신청자에게" 사업자정보를 확인할
            수 있는 증명서(사업자등록증), 재직증명서 등을 별도로 요구할 수 있다.
          </li>
          <li>
            ４. "신청자"가 사업자등록번호가 없는 기관이나 단체, "사이트"에
            제공된 수단으로 본인인증이 불가한 경우 "회사"가 정한 별도의 절차에
            따라 이용계약을 할 수 있다.
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>제 2 조 (이용신청의 승낙과 제한)</h4>
          <li>
            1. "회사"는 전조의 규정에 의한 이용신청 고객에 대하여 업무수행상
            또는 기술상 지장이 없는 경우에는 원칙적으로 접수순서에 따라 서비스
            이용을 승낙한다.
          </li>
          <li>
            2. "회사"는 아래 사항에 해당하는 경우에 대해서는 이용신청을 승낙하지
            아니하거나 유보할 수 있다.
          </li>
          <li>
            가) 실제 회사명과 사업자등록번호가 아니거나 타사/타인의 정보를
            이용하여 신청한 경우
          </li>
          <li>나) 이용계약 신청서의 내용을 허위로 기재한 경우</li>
          <li>다) 휴·폐업 사업자등록번호로 등록한 경우</li>
          <li>
            라) "회사"의 설비, 기술상, 정책상 사정으로 이용 승낙이 곤란한 경우
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>제 3 조 ("신청자"의 의무와 책임)</h4>
          <li>
            1. "신청자"는 구직자들이 채용공고를 열람한 후 해당 기업에 대한
            판단을 돕기 위해 기업정보를 정확히 기재하여야 한다.
          </li>
          <li>
            2. "신청자"는 직업안정법 제34조 및 동법 시행령 제 34조 거짓구인광고
            또는 거짓구인조건제시의 범위에 위배되지 않도록 채용공고를 작성하여
            등록해야 하며, 거짓구인광고 또는 거짓구인조건제시의 범위는 다음 각
            호의 어느 하나에 해당하는 것으로 한다.
          </li>
          <li>
            가) 구인을 가장하여 물품판매, 수강생 모집, 직업소개, 부업알선,
            자금모집 등을 행하는 광고
          </li>
          <li>
            나) 거짓 구인을 목적으로 구인자의 신원(업체명 또는 성명)을 표시하지
            아니하는 광고
          </li>
          <li>
            다) 구인자가 제시한 직종, 고용형태, 근로조건 등이 응모할 때의 그것과
            현저히 다른 광고
          </li>
          <li>라) 기타 공고의 중요 내용이 사실과 다른 광고</li>
          <li>
            ３. "신청자"는 관련 법률에 의거하여 근로자의 모집 및 채용에 있어서
            남녀, 연령을 차별하여서는 아니되며, 15세 미만자에 대하여 채용 모집을
            할 수 없다.
          </li>
          <li>
            ４. "신청자"는 다른 회원에게 "회사"가 제시하는 별도의 커뮤니케이션을
            통하여 연락을 취할 수 있다. 단, 채용 목적에 국한되어야 하며, 기업의
            영업ㆍ마케팅ㆍ제3자 제공 시에는 개인정보보호법, 직업안정법,
            정보통신망이용촉진 및 정보보호 등에 관한 법률에 의거하여 법적 책임을
            질 수 있다.
          </li>
          <li>
            5. 관계 법령을 위반한 경우 이에 대한 책임은 전적으로 "신청자"에게
            있다.
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>제 4 조 ("회사"의 의무와 책임)</h4>
          <li>
            1. "회사"는 본 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를
            제공할 수 있도록 최선의 노력을 다해야 한다.
          </li>
          <li>
            2. "회사"는 서비스와 관련한 회원의 불만사항이 접수되는 경우 이를
            즉시 처리하여야 하며, 즉시 처리가 곤란한 경우에는 그 사유와
            처리일정을 서비스 화면 또는 기타 방법을 통해 동 회원에게 통지하여야
            한다.
          </li>
          <li>
            3. "회사는" 천재지변 등 예측하지 못한 일이 발생하거나 시스템의
            장애가 발생하여 서비스가 중단될 경우 이에 대한 손해에 대해서는
            책임을 지지 않는다. 다만 자료의 복구나 정상적인 서비스 지원이 되도록
            최선을 다할 의무를 진다.
          </li>
          <li>
            ４. "회사"는 본 서비스를 이용하여 기대하는 수익을 얻지 못하거나
            상실한 것에 대하여 책임을 지지 않으며, 회사가 무료로 제공하는
            서비스의 이용과 관련하여 개인정보취급방침에서 정하는 내용에 위반하지
            않은 한 어떠한 손해도 책임지지 않는다.
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>제 5 조 (자료 내용의 활용)</h4>
          <li>
            1. "자료 내용"이라 함은 "신청자"가 등록한 기업정보 및 채용공고와
            사이트에 게시한 게시물을 말한다.
          </li>
          <li>
            2. "신청자"는 "자료 내용"을 사실에 근거하여 성실하게 작성해야 하며,
            만일 "자료 내용"이 사실이 아니거나 부정확하게 작성되어 발생하는 모든
            책임은 "신청자"에게 있다.
          </li>
          <li>
            ３. "자료 내용"의 관리와 작성은 "신청자" 본인이 하는 것이 원칙이나
            사정상 위탁 또는 대행 관리를 하더라도 책임은 "신청자"에게 있으며,
            "신청자"는 주기적으로 자신의 "자료 내용"을 확인하여 항상 정확하게
            관리가 되도록 노력해야 한다.
          </li>
          <li>
            4. "회사"는 기업정보 및 채용공고를 "회사"가 정한 방법에 의해 노출할
            수 있다.
          </li>
          <li>
            5. "회사"는 "신청자"가 등록한 "자료 내용" 에 오자, 탈자 또는 사회적
            통념에 어긋나는 문구와 내용이 있을 경우, 임의로 이를 언제든지 수정
            및 비공개 처리할 수 있다.
          </li>
          <li>
            6. "자료 내용" 및 채용 과정에서 수집된 정보는 취업 및 관련 동향의
            통계 자료로 활용될 수 있으며, 매체를 통해 언론에 배포될 수 있다. 단,
            활용되는 정보 중 개인을 식별할 수 있는 개인정보는 제외된다.
          </li>
          <li>
            7. "회사"는 제휴 관계를 체결한 여타 인터넷 서비스 및 채용박람회 또는
            신문, 잡지 등의 오프라인 매체를 통해 사이트에 등록한 "신청자"의
            기업정보와 채용공고가 열람될 수 있도록 서비스를 제공할 수 있다. 이
            때, "회사"는 제휴를 통해 타 사이트 및 매체에 등록될 수 있음을
            고지하고 동의를 받아야 하며, 제휴 사이트 전체 목록을 사이트내에서
            상시 열람할 수 있도록 해야 한다.
          </li>
          <li>
            ８."신청자"는 서비스를 이용하여 얻은 정보를 "회사"의 사전동의 없이
            복사, 복제, 번역, 출판, 방송, 수익사업, 기타의 방법으로 사용하거나
            이를 타인에게 제공할 수 없다.
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>제 6 조 (이용해지/서비스중지/자료삭제)</h4>
          <li>
            １. "신청자"는 언제든지 회원탈퇴 또는 채용공고 등록을 해지하기 위해
            고객센터 또는 회원탈퇴 메뉴 등을 통하여 이용계약 해지 신청을 할 수
            있으며, "회사"는 관련법 등이 정하는 바에 따라 이를 처리한다.
          </li>
          <li>
            2. 다음의 사항에 해당하는 경우 "회사"는 사전 동의없이 가입해지나
            서비스 중지, 채용공고 삭제 조치를 취할 수 있다.
          </li>
          <li>• 회원이 등록한 정보의 내용이 사실과 다르거나 조작되었을 때</li>
          <li>
            • 사업자등록증에 나타난 정보와 기업회원 가입시의 정보가 일치하지
            않을 때
          </li>
          <li>
            • 타 기업의 사업자등록번호나 상호를 도용하여 허위로 기업정보를
            등록한 경우
          </li>
          <li>
            • 지사, 지점, 영업소 등의 경우 구체적인 지사, 지점, 영업소 명칭을
            사용하지 않고 기업명을 등록했거나 지사, 지점, 영업소의
            사업자등록번호가 별도 있음에도 불구하고 본사의 사업자등록번호로
            기업회원 가입을 했을 때
          </li>
          <li>
            • 회사명 , 담당자 성명, 사무실 연락처 등 구인업체의 중요 정보를
            정확하게 기입하지 않았을 때
          </li>
          <li>
            • 동일 사업자가 마감일이 지나지 않은 사실상의 동일 내용의 채용공고를
            한 계정 및 다수의 계정을 사용하여 중복 등록했을 때
          </li>
          <li>• 허위 구인공고를 등록했을 때</li>
          <li>
            • 작성자가 제시한 직종, 업무내용, 근로조건 등이 실제와 현저히 다를
            때
          </li>
          <li>
            • 채용공고의 모집요강만으로 업무에 대한 내용이 명확하지 않을 때
          </li>
          <li>• 모집요강에 적합한 업직종 분류를 지정하지 않았을 때</li>
          <li>• 다단계, 피라미드 식의 모집 내용을 등록했을 때</li>
          <li>
            • 구인을 가장하여 유학알선, 물품판매, 자금 모금 등을 행하는 내용을
            등록했을 때
          </li>
          <li>
            • 회원모집 형태의 광고 또는 카드회원 모집(수당제 광고) 내용을
            등록했을 때
          </li>
          <li>
            • 추천인 모집 광고, 재택 쇼핑몰 분양 광고, 직업소개, 부업알선 광고를
            등록했을 때
          </li>
          <li>
            • 취업수수료 등 취업 관련 비용을 필요로 하는 채용공고를 등록했을 때
            (운송, 물류, 지입, 인력용역 등)
          </li>
          <li>
            • 동업자 모집, 프랜차이즈 모집, 점포개설, 창업, 사이트 홍보 등 직원
            채용이 아닌 공고를 등록했을 때
          </li>
          <li>• 불건전한 내용의 유흥업소 채용공고를 등록했을 때</li>
          <li>• 구직자의 피해 사례가 접수된 채용공고</li>
          <li>
            • 임금체불로 진정서가 접수되어 관계 당국에 고소·고발되어 있는 기업
          </li>
          <li>
            • 본 "서비스"에서 안내하는 방법으로 가입하지 않았거나 등록하지
            않았을 때
          </li>
          <li>• 규정한 유료서비스 이용 요금을 납부하지 않았을 때</li>
          <li>• 불순한 의도로 유료서비스를 반복적으로 결제/취소할 때</li>
          <li>• 실제 채용이 마감된 경우</li>
          <li>• "회사"가 지정한 게시 기간이 지난 채용공고</li>
          <li>
            • 본 서비스 목적에 맞지 않는 분야에 정보를 활용하여 사회적 물의가
            발생한 때
          </li>
          <li>
            • 타인/타법인 으로부터 허위사실 및 명예훼손 등으로 삭제 요청이
            접수된 경우
          </li>
          <li>
            • 기타 관계법규에 위배되는 내용이거나 "서비스"의 원활한 운영을
            위하여 운영자가 필요하다고 판단한 경우
          </li>
        </ul>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          <h4>제 7조 (유료 서비스)</h4>
          <li>
            1. 가입은 무료이나, 자신의 정보를 보다 효과적으로 노출시키거나, 기타
            서비스를 이용하기 위한 별도의 서비스는 유료로 제공될 수 있다.
          </li>
          <li>
            2. "회사"는 유료서비스를 제공할 경우 사이트에 요금에 대해서 공지를
            하여야 한다.
          </li>
          <li>
            3. "회사"는 유료서비스 이용금액을 서비스의 종류 및 기간에 따라 예고
            없이 변경할 수 있다. 다만, 변경 이전에 적용 또는 계약한 금액은
            소급하여 적용하지 아니한다.
          </li>
          <li>
            4. 유료 서비스는 등록 또는 신청과 동시에 "회사"와 채권, 채무 관계가
            발생하며, "신청자"는 이에 대한 결제를 "회사"가 제공하는 결제수단을
            통해 처리해야 한다.
          </li>
          <li>
            5. "회사는" 이용자에게 유료 서비스를 이용하고 남은 잔여 금액의 반환
            시, 각 유료서비스에서 계약된 바에 따라, 서비스 이용요금을 공제하고
            반환한다.
          </li>
          <li>
            6. "회사는" 이용자가 과다납입한 요금에 대하여는 그 금액을 반환한다.
            다만, 이용자가 동의할 경우 다음 달에 청구할 요금에서 해당 금액만큼을
            감하여 반환한다.
          </li>
          <li>
            7. "회사는" 이용요금을 반환 받아야 할 이용자가 체납이 있는 경우에는
            반환해야 할 요금에서 이를 우선 공제하고 반환한다.
          </li>
          <li>
            8. "회사는" 이용자에게 환불 시 유료서비스 이용 시 계약된 바에 따라,
            서비스 이용료와 환불 수수료를 공제하고 반환한다.
          </li>
          <li>
            9. "회사"는 이용자가 허위 구인광고 및 제6조 2항에 해당하는 행위로
            "서비스"를 부정이용한 경우 지불된 이용금액을 일체 반환하지 않는다.
          </li>
          <li>
            10. "회사"는 관계법령의 변경, 천재지변 또는 이에 준하는 불가항력으로
            인하여 "유료서비스"를 제공할 수 없는 경우에는 "유료서비스" 제공에
            관한 책임이 면제된다.
          </li>
          <li>
            11. "회사"는 "신청자"의 귀책사유로 인한 유료서비스 이용의 장애에
            대하여는 책임을 지지 않는다.
          </li>
          <li>
            12. "회사"는 "신청자"가 "유료서비스"와 관련하여 게재한 정보, 자료,
            사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않는다.
          </li>
          <li>
            13. "회사"는 "신청자" 상호간 또는 "신청자"과 제3자 간에
            "유료서비스"를 매개로 하여 발생한 분쟁 등에 대하여 책임을 지지
            않는다.
          </li>
        </ul>
        <p>부칙 - 이 약관은 2016-05-03부터 시행한다.</p>
      </div>
    </TermWrapper>
  );
};

export default Service;
