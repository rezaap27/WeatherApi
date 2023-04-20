export default function Sub(props) {
  return (
    <>
      <form onSubmit={props.handleSubmit} id="input-info">
        <div id="f1">
          <label htmlFor="c-name">
            city name
            <br />
            نام شهر
          </label>
        </div>
        <div id="f2">
          <input
            required={true}
            autoFocus={true}
            id="c-name"
            type="text"
            placeholder="نام شهر را وارد کنید"
            onChange={(e) => {
              props.setCityName(e.target.value);
            }}
          />
          <button onClick={props.handelClick}>ثبت</button>
        </div>
      </form>
    </>
  );
}
