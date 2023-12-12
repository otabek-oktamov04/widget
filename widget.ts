interface IWidgetProps {
  lang?: "uz" | "ru";
  id: string;
  description?: string;
  currency?: "RUB" | "UZS";
  autoClose?: boolean;
  autoCloseTime?: number;
  onSuccess?: () => void;
  onFail?: () => void;
  onComplete?: () => void;
  isOpen: boolean;
  mode: "dark" | "light";
}

function renderWidget(props: IWidgetProps) {
  const darkHtml = ` <div
    style="
      background: #000e27;
      height: 641px;
      border-radius: 20px;
      padding: 20px 40px;
      color: white;
      display: inline-block;
      margin: auto;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
    "
  >
    <div style="display: flex; align-items: center; gap: 20px">
      <img src="pay.png" width="68px" height="68px" />
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: start;
        "
      >
        <p
          style="
            padding: 0;
            margin: 0;
            color: #8c949f;
            font-weight: 600;
            margin-bottom: 5px;
          "
        >
          Тестовая оплата
        </p>
        <p style="padding: 0; margin: 0; font-weight: 700">100,00 ₽</p>
      </div>
    </div>
    <form style="margin-top: 20px;display: flex; flex-direction: column; gap: 10px;" >
      <input
     
        style="
          height: 52px;
          width: 342px;
          font-size: 20px;
          border-radius: 10px;
          border: none;
          background: #242c44;
          color: white;
          padding:0px 20px
        "
      />
      <input
     
      style="
        height: 52px;
        width: 342px;
        font-size: 20px;
        border-radius: 10px;
        border: none;
        background: #242c44;
        color: white;
        padding:0px 20px
      "
    />
    </form>
  </div>`;

  const {
    lang = "uz",
    id,
    description,
    currency = "UZS",
    autoClose,
    autoCloseTime,
    onSuccess,
    onFail,
    onComplete,
    isOpen,
    mode = "light",
  } = props;


  if (isOpen ) {
    const widgetContainer = document.createElement('div');
    widgetContainer.innerHTML = darkHtml;
    document.body.appendChild(widgetContainer);
  }
}
