import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

function SignUp() {
  const navigate = useNavigate();
  const formSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력해주세요")
      .email("이메일 형식이 아닙니다."),
    password: yup
      .string()
      .required("영문, 숫자포함 8자리를 입력해주세요.")
      .min(8, "최소 8자 이상 가능합니다")
      .max(15, "최대 15자 까지만 가능합니다")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
        "영문 숫자포함 8자리를 입력해주세요."
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 다릅니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => console.log(data);
  const onCancel = () => navigate("/");
  return (
    <div className="App">
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" placeholder="이메일" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <br />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <br />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        <br />
        <input type="submit" />
        <input type="button" value="취소" onClick={onCancel} />
      </form>
    </div>
  );
}
export default SignUp;
