"use client";

import { useId, useState } from "react";
import "./lab.css";

const format = (value, digits = 2) =>
  new Intl.NumberFormat("ru-RU", { maximumFractionDigits: digits }).format(value);

const aliases = {
  "electric-current": "current", "electrical-current": "current", strom: "current",
  "circuit-types": "circuits", "types-of-circuits": "circuits",
  "electric-voltage": "voltage", "electrical-resistance": "resistance",
  "ohms-law": "ohm", "ohm-law": "ohm", "electric-energy": "energy",
  "electrical-energy": "energy", "electrical-power": "power",
  "electric-field": "field", "electric-fields": "field", capacitors: "capacitor",
  "magnetic-field": "magnets", "magnetic-fields": "magnets",
  "magnetic-values": "magnetic-quantities",
};

function Range({ label, value, min, max, step = 1, unit, onChange }) {
  const id = useId();
  return (
    <div className="lab-control">
      <div className="lab-control-label">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{format(value, 3)} <span>{unit}</span></output>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value}
        onChange={(event) => onChange(Number(event.target.value))} />
      <div className="lab-range-ends" aria-hidden="true"><span>{min} {unit}</span><span>{max} {unit}</span></div>
    </div>
  );
}

function Circuit({ voltage, resistance, current, second, parallel = false }) {
  const marker = `arrow-${useId().replace(/:/g, "")}`;
  return (
    <svg className="lab-diagram" viewBox="0 0 420 220" role="img" aria-label={`Источник ${format(voltage)} вольт, ${parallel ? "параллельное" : "последовательное"} соединение, ток ${format(current)} ампер`}>
      <defs><marker id={marker} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 7 3.5 0 7Z" fill="#667b35" /></marker></defs>
      <path d="M68 87V60H350V174H68V133" className="lab-wire" />
      <circle cx="68" cy="110" r="23" className="lab-source" />
      <text x="68" y="106" className="lab-svg-symbol">+</text><text x="68" y="122" className="lab-svg-symbol">−</text>
      <text x="68" y="207" className="lab-svg-label">U = {format(voltage)} В</text>
      {parallel && second !== undefined ? <>
        <path d="M133 60V118H350" className="lab-wire" />
        <rect x="203" y="47" width="68" height="26" rx="2" className="lab-resistor" />
        <rect x="203" y="105" width="68" height="26" rx="2" className="lab-resistor" />
        <text x="237" y="38" className="lab-svg-label">R₁ = {format(resistance)} Ом</text>
        <text x="237" y="151" className="lab-svg-label">R₂ = {format(second)} Ом</text>
        <circle cx="133" cy="60" r="4" className="lab-node" /><circle cx="350" cy="118" r="4" className="lab-node" />
      </> : second !== undefined ? <>
        <rect x="145" y="47" width="65" height="26" rx="2" className="lab-resistor" />
        <rect x="260" y="47" width="65" height="26" rx="2" className="lab-resistor" />
        <text x="177" y="38" className="lab-svg-label">R₁ = {format(resistance)} Ом</text>
        <text x="292" y="38" className="lab-svg-label">R₂ = {format(second)} Ом</text>
      </> : <>
        <rect x="192" y="47" width="86" height="26" rx="2" className="lab-resistor" />
        <text x="235" y="38" className="lab-svg-label">R = {format(resistance)} Ом</text>
      </>}
      <path d="M280 174H205" stroke="#667b35" strokeWidth="3" fill="none" markerEnd={`url(#${marker})`} />
      <text x="242" y="204" className="lab-svg-label">I = {format(current, 3)} А</text>
    </svg>
  );
}

function Charges({ charge, time }) {
  return <svg className="lab-diagram" viewBox="0 0 420 220" role="img" aria-label="Положительные заряды движутся через поперечное сечение проводника; сила тока равна заряду, делённому на время">
    <rect x="36" y="68" width="348" height="78" rx="39" fill="#f0f2e8" stroke="#d8dfc7" />
    <ellipse cx="249" cy="107" rx="13" ry="39" fill="#d8f36a" fillOpacity=".5" stroke="#667b35" strokeDasharray="4 4" />
    {[73, 119, 165, 211, 289, 335].map((x) => <g key={x}><circle cx={x} cy="107" r="13" fill="#fff" stroke="#667b35" /><text x={x} y="112" className="lab-svg-symbol">+</text></g>)}
    <path d="M151 42H240L231 36M240 42 231 48" fill="none" stroke="#667b35" strokeWidth="2" />
    <text x="196" y="27" className="lab-svg-label">Условное направление тока</text>
    <text x="250" y="173" className="lab-svg-label">сечение проводника</text>
    <text x="210" y="207" className="lab-svg-label">За {format(time)} с проходит заряд {format(charge)} Кл</text>
  </svg>;
}

function Plates({ voltage, gap = 4, capacitor = false }) {
  const left = 210 - gap * 9, right = 210 + gap * 9;
  return <svg className="lab-diagram" viewBox="0 0 420 220" role="img" aria-label={`Две параллельные пластины с разностью потенциалов ${voltage} вольт. Поле направлено от положительной пластины к отрицательной`}>
    <rect x={left - 8} y="38" width="12" height="135" rx="3" fill="#667b35" />
    <rect x={right - 4} y="38" width="12" height="135" rx="3" fill="#a9b49a" />
    {[61, 90, 119, 148].map((y) => <g key={y}>
      <text x={left - 22} y={y + 4} className="lab-svg-symbol">+</text>
      <text x={right + 23} y={y + 4} className="lab-svg-symbol">−</text>
      <path d={`M${left + 14} ${y}H${right - 15}l-7 -4m7 4 -7 4`} stroke="#809545" strokeWidth="1.7" fill="none" />
    </g>)}
    <path d={`M${left} 188H${right}M${left} 183V193M${right} 183V193`} stroke="#a9b49a" />
    <text x="210" y="211" className="lab-svg-label">{capacitor ? `U = ${format(voltage)} В · поле между обкладками` : `d = ${format(gap)} см`}</text>
    <text x="210" y="22" className="lab-svg-label">{capacitor ? "Плоский конденсатор" : "Однородное электрическое поле"}</text>
  </svg>;
}

function Magnet({ angle = 45, coil = false, turns = 200, current = 1 }) {
  const marker = `magnet-${useId().replace(/:/g, "")}`;
  const radians = angle * Math.PI / 180;
  const x = 210 + 157 * Math.cos(radians), y = 110 - 76 * Math.sin(radians);
  const dx = x - 210, dy = y - 110, r2 = dx * dx + dy * dy;
  const bx = 1 - 3 * dx * dx / r2, by = -3 * dx * dy / r2;
  const compassAngle = Math.atan2(by, bx) * 180 / Math.PI;
  return <svg className="lab-diagram" viewBox="0 0 420 220" role="img" aria-label={coil ? "Поле длинной катушки: внутри силовые линии направлены от южного полюса к северному" : "Магнитные линии вне магнита выходят из северного полюса N и входят в южный S. Красный конец компаса направлен по полю"}>
    <defs><marker id={marker} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0 0 6 3 0 6Z" fill="#809545" /></marker></defs>
    <path d="M145 106C66 103 66 28 210 28C354 28 354 103 275 106" className="lab-field-line" markerMid={`url(#${marker})`} />
    <path d="M145 115C66 118 66 192 210 192C354 192 354 118 275 115" className="lab-field-line" markerMid={`url(#${marker})`} />
    <path d="M145 100C109 83 134 56 210 56C286 56 311 83 275 100" className="lab-field-line" markerMid={`url(#${marker})`} />
    <path d="M145 120C109 137 134 164 210 164C286 164 311 137 275 120" className="lab-field-line" markerMid={`url(#${marker})`} />
    {coil ? <>
      <rect x="140" y="85" width="140" height="50" rx="10" fill="#f0f3e8" />
      {Array.from({ length: 13 }, (_, i) => <ellipse key={i} cx={145 + i * 11} cy="110" rx="7" ry="28" fill="none" stroke="#788d48" strokeWidth="2" />)}
      <path d="M260 110H168l8 -5m-8 5 8 5" fill="none" stroke="#20231f" strokeWidth="2" />
      <text x="122" y="115" className="lab-svg-symbol">N</text><text x="299" y="115" className="lab-svg-symbol">S</text>
      <text x="210" y="215" className="lab-svg-label">{turns} витков · I = {format(current)} А · L = 20 см</text>
    </> : <>
      <path d="M145 89H210V132H145Q138 132 138 125V96Q138 89 145 89" fill="#d8f36a" />
      <path d="M210 89H275Q282 89 282 96V125Q282 132 275 132H210Z" fill="#dfe5d5" />
      <text x="175" y="116" className="lab-svg-symbol">N</text><text x="247" y="116" className="lab-svg-symbol">S</text>
      <g transform={`translate(${x} ${y})`}><circle r="20" fill="white" stroke="#cbd3bb" /><g transform={`rotate(${compassAngle})`}><path d="M15 0 -10 -5V5Z" fill="#a45040" /><path d="M-15 0 0 -5V5Z" fill="#b5c0a3" /></g></g>
      <text x="210" y="215" className="lab-svg-label">Красный конец стрелки компаса — северный</text>
    </>}
  </svg>;
}

function EnergyFlow({ input, efficiency, unit = "Вт" }) {
  const useful = input * efficiency / 100;
  return <div className="lab-flow" role="img" aria-label={`Поступает ${format(input)} ${unit}; полезная часть ${format(useful)} ${unit}; потери ${format(input - useful)} ${unit}`}>
    <div className="lab-flow-source"><span>Поступает</span><strong>{format(input)} <small>{unit}</small></strong></div>
    <div className="lab-flow-arrow" aria-hidden="true">→</div>
    <div className="lab-flow-destination"><div className="lab-flow-useful"><span>Полезная часть</span><strong>{format(useful)} <small>{unit}</small></strong></div><div className="lab-flow-loss"><span>Потери</span><strong>{format(input - useful)} <small>{unit}</small></strong></div></div>
  </div>;
}

function Flux({ angle, field, area }) {
  return <svg className="lab-diagram" viewBox="0 0 420 220" role="img" aria-label={`Магнитный поток сквозь поверхность: угол между полем и нормалью ${angle} градусов`}>
    {[55, 90, 125, 160].map((y) => <path key={y} d={`M42 ${y}H375l-9 -5m9 5 -9 5`} className="lab-field-line" />)}
    <g transform={`translate(212 108) rotate(${-angle})`}><path d="M0 -62 18 -48V62L0 48Z" fill="#d8f36a" fillOpacity=".8" stroke="#667b35" /><path d="M7 0H86L79 -5M86 0 79 5" stroke="#20231f" strokeWidth="2" fill="none" /><text x="78" y="-13" className="lab-svg-label">n</text></g>
    <text x="70" y="29" className="lab-svg-label">B = {format(field)} мТл</text><text x="212" y="203" className="lab-svg-label">S = {format(area)} см² · α = {angle}° к нормали n</text>
  </svg>;
}

const initial = { charge: 12, time: 4, voltage: 12, resistance: 100, r1: 100, r2: 200,
  work: 24, voltageCharge: 2, length: 10, area: 1, hours: 2, watts: 60,
  amps: 0.5, efficiency: 80, input: 100, gap: 4, capacitance: 100,
  angle: 45, turns: 200, coilAmps: 1, field: 20, fluxArea: 25, fluxAngle: 0 };

export default function InteractiveLab({ lessonId }) {
  const [values, setValues] = useState(initial);
  const [parallel, setParallel] = useState(false);
  const v = values;
  const set = (key) => (value) => setValues((previous) => ({ ...previous, [key]: value }));
  const range = (key, label, min, max, step, unit) => <Range key={key} label={label} value={v[key]} min={min} max={max} step={step} unit={unit} onChange={set(key)} />;
  const id = aliases[lessonId] || lessonId;
  let title, lead, controls, visual, formula, result, unit, note;

  switch (id) {
    case "current":
      title = "Сколько заряда проходит за секунду?";
      lead = "Меняйте заряд и время. Сила тока показывает скорость переноса заряда.";
      controls = [range("charge", "Заряд Q", 1, 24, 1, "Кл"), range("time", "Время t", 1, 12, 1, "с")];
      visual = <Charges charge={v.charge} time={v.time} />;
      formula = `I = Q / t = ${format(v.charge)} / ${format(v.time)}`;
      result = v.charge / v.time; unit = "А";
      note = "1 А = 1 Кл/с. На схеме показан условный положительный заряд. В металле электроны движутся в противоположную сторону.";
      break;
    case "circuits": {
      const req = parallel ? v.r1 * v.r2 / (v.r1 + v.r2) : v.r1 + v.r2;
      title = "Два резистора — два способа соединения";
      lead = "Переключите соединение и сравните общее сопротивление при одном источнике 12 В.";
      controls = <><div className="lab-switch" aria-label="Тип соединения"><button type="button" aria-pressed={!parallel} onClick={() => setParallel(false)}>Последовательно</button><button type="button" aria-pressed={parallel} onClick={() => setParallel(true)}>Параллельно</button></div>{range("r1", "Сопротивление R₁", 50, 500, 10, "Ом")}{range("r2", "Сопротивление R₂", 50, 500, 10, "Ом")}</>;
      visual = <Circuit voltage={12} resistance={v.r1} second={v.r2} parallel={parallel} current={12 / req} />;
      formula = parallel ? "Rобщ = R₁ · R₂ / (R₁ + R₂)" : "Rобщ = R₁ + R₂";
      result = req; unit = "Ом";
      note = parallel ? `В обеих ветвях U = 12 В. I₁ = ${format(12 / v.r1, 3)} А; I₂ = ${format(12 / v.r2, 3)} А. Общий ток — сумма токов ветвей. Rобщ меньше каждого из резисторов.` : "Через оба резистора течёт одинаковый ток. Напряжение источника делится между ними пропорционально сопротивлениям. Идеальные провода имеют нулевое сопротивление.";
      break;
    }
    case "voltage":
      title = "Энергия на каждый кулон";
      lead = "Напряжение связывает работу электрического поля и переносимый заряд.";
      controls = [range("work", "Работа W", 1, 48, 1, "Дж"), range("voltageCharge", "Заряд Q", 1, 8, 0.5, "Кл")];
      result = v.work / v.voltageCharge; unit = "В";
      formula = `U = W / Q = ${format(v.work)} / ${format(v.voltageCharge)}`;
      visual = <Plates voltage={result} />;
      note = "1 В = 1 Дж/Кл. Здесь W — работа поля при переносе положительного заряда от более высокого потенциала к более низкому. Напряжение всегда задают между двумя точками.";
      break;
    case "resistance": {
      const resistance = 0.0175 * v.length / v.area;
      title = "Почему длинный тонкий провод сопротивляется сильнее?";
      lead = "Исследуйте медный провод при постоянной температуре около 20 °C.";
      controls = [range("length", "Длина l", 1, 50, 1, "м"), range("area", "Площадь сечения S", 0.5, 4, 0.25, "мм²")];
      visual = <div className="lab-conductor"><div className="lab-conductor-wire" style={{ height: `${14 + v.area * 11}px`, width: `${35 + v.length * 1.1}%` }} /><div className="lab-conductor-caption"><span>Медь · Kupfer</span><strong>ρ = 0,0175 Ом·мм²/м</strong></div><p>Длина увеличивается → R растёт<br />Сечение увеличивается → R уменьшается</p></div>;
      formula = `R = ρ · l / S = 0,0175 · ${format(v.length)} / ${format(v.area)}`;
      result = resistance; unit = "Ом";
      note = "S — площадь поперечного сечения, а не диаметр провода. Удельное сопротивление ρ зависит от материала и температуры. Для расчёта всей цепи учитывают также обратный провод.";
      break;
    }
    case "energy":
      title = "Сколько энергии расходует прибор?";
      lead = "Задайте постоянную мощность и длительность работы. Следите за единицами энергии.";
      controls = [range("watts", "Мощность P", 10, 200, 10, "Вт"), range("hours", "Время t", 0.5, 12, 0.5, "ч")];
      result = v.watts * v.hours / 1000; unit = "кВт·ч";
      formula = `W = P · t = ${format(v.watts)} Вт · ${format(v.hours)} ч`;
      visual = <div className="lab-energy-display"><span>Счётчик энергии</span><strong>{format(v.watts * v.hours)} <small>Вт·ч</small></strong><div className="lab-energy-dots" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i} className={i < v.hours ? "lab-dot-on" : ""} />)}</div><p>{format(v.watts * v.hours * 3600)} Дж</p></div>;
      note = "1 кВт·ч = 1 000 Вт·ч = 3 600 000 Дж. Киловатт-час — единица энергии. В расчёте мощность считается постоянной, а время задано в часах.";
      break;
    case "power":
      title = "Мощность — скорость передачи энергии";
      lead = "Для цепи постоянного тока мощность равна произведению напряжения и силы тока.";
      controls = [range("voltage", "Напряжение U", 1, 24, 1, "В"), range("amps", "Сила тока I", 0.1, 2, 0.1, "А")];
      visual = <Circuit voltage={v.voltage} resistance={v.voltage / v.amps} current={v.amps} />;
      formula = `P = U · I = ${format(v.voltage)} · ${format(v.amps)}`;
      result = v.voltage * v.amps; unit = "Вт";
      note = `За каждую секунду прибор получает ${format(result)} Дж энергии. Сопротивление нагрузки здесь соответствует выбранным U и I. Для переменного тока общей формулы P = U · I недостаточно без учёта характера нагрузки.`;
      break;
    case "efficiency":
      title = "Куда уходит полученная энергия?";
      lead = "КПД показывает, какая доля входной мощности превращается в полезную.";
      controls = [range("input", "Входная мощность Pвх", 20, 200, 10, "Вт"), range("efficiency", "КПД η", 10, 100, 5, "%")];
      visual = <EnergyFlow input={v.input} efficiency={v.efficiency} />;
      formula = `Pпол = Pвх · η = ${format(v.input)} · ${format(v.efficiency / 100)}`;
      result = v.input * v.efficiency / 100; unit = "Вт";
      note = "Потери обычно переходят в тепло (в том числе из-за трения) и звук. Энергия сохраняется: входная энергия = полезная энергия + потери. Значение 100 % описывает идеальную границу модели.";
      break;
    case "field":
      title = "Напряжение и расстояние создают поле";
      lead = "Раздвигайте пластины и меняйте напряжение, чтобы увидеть связь E = U / d.";
      controls = [range("voltage", "Напряжение U", 1, 24, 1, "В"), range("gap", "Расстояние d", 1, 7, 0.5, "см")];
      visual = <Plates voltage={v.voltage} gap={v.gap} />;
      formula = `E = U / d = ${format(v.voltage)} / ${format(v.gap / 100)}`;
      result = v.voltage / (v.gap / 100); unit = "В/м";
      note = "Перед вычислением сантиметры переведены в метры. Модель описывает область вдали от краёв больших параллельных пластин; краевыми эффектами пренебрегаем. 1 В/м = 1 Н/Кл.";
      break;
    case "capacitor":
      title = "Как конденсатор накапливает заряд?";
      lead = "Ёмкость связывает модуль заряда на каждой обкладке с напряжением между ними.";
      controls = [range("capacitance", "Ёмкость C", 10, 500, 10, "мкФ"), range("voltage", "Напряжение U", 1, 24, 1, "В")];
      visual = <Plates voltage={v.voltage} gap={4} capacitor />;
      formula = `Q = C · U = ${format(v.capacitance)} мкФ · ${format(v.voltage)} В`;
      result = v.capacitance * v.voltage; unit = "мкКл";
      note = `Запасённая энергия W = C · U² / 2 = ${format(v.capacitance * 1e-6 * v.voltage ** 2 / 2, 5)} Дж. Заряды обкладок равны по модулю и противоположны по знаку; суммарный заряд идеального конденсатора равен нулю.`;
      break;
    case "magnets":
      title = "Поставьте компас рядом с магнитом";
      lead = "Перемещайте компас вокруг магнита. Его северный конец ориентируется по магнитному полю.";
      controls = range("angle", "Положение компаса", 15, 165, 5, "°");
      visual = <Magnet angle={v.angle} />;
      formula = "Вне магнита: N → S · внутри: S → N";
      result = null; unit = "";
      note = "Магнитные линии замкнуты и не пересекаются. Стрелка рассчитана по приближённой модели магнитного диполя; нарисованные линии показывают общую картину поля. Разделить северный и южный полюсы, разрезав магнит, нельзя.";
      break;
    case "electromagnetism":
      title = "Управляйте полем катушки";
      lead = "Больше витков или сильнее ток — больше магнитная индукция в длинной катушке.";
      controls = [range("turns", "Количество витков N", 50, 500, 25, "витков"), range("coilAmps", "Сила тока I", 0.1, 2, 0.1, "А")];
      visual = <Magnet coil turns={v.turns} current={v.coilAmps} />;
      formula = `B ≈ μ₀ · N · I / L; L = 0,20 м`;
      result = 4 * Math.PI * 1e-7 * v.turns * v.coilAmps / 0.2 * 1000; unit = "мТл";
      note = "Модель: длинный соленоид без сердечника, вдали от концов; μ₀ ≈ 4π·10⁻⁷ Гн/м. Рисунок условный, не в масштабе. Сердечник меняет поле, а железо может насыщаться. Смена направления тока меняет полюсы местами.";
      break;
    case "magnetic-quantities":
      title = "Сколько магнитного поля проходит через поверхность?";
      lead = "Магнитный поток зависит от индукции B, площади S и угла к нормали поверхности.";
      controls = [range("field", "Индукция B", 1, 100, 1, "мТл"), range("fluxArea", "Площадь S", 5, 100, 5, "см²"), range("fluxAngle", "Угол к нормали α", 0, 90, 5, "°")];
      visual = <Flux angle={v.fluxAngle} field={v.field} area={v.fluxArea} />;
      formula = "Φ = B · S · cos α";
      result = v.field * 0.001 * v.fluxArea * 0.0001 * Math.cos(v.fluxAngle * Math.PI / 180) * 1e6; unit = "мкВб";
      note = "Для однородного поля и плоской поверхности. Нормаль n перпендикулярна поверхности: при α = 0° поток максимален, при 90° равен нулю. В SI: 1 мТл = 10⁻³ Тл; 1 см² = 10⁻⁴ м²; 1 Вб = 1 Тл·м².";
      break;
    case "ohm":
    default:
      title = "Почувствуйте закон Ома";
      lead = "Измените напряжение и сопротивление. Как изменится ток в цепи?";
      controls = [range("voltage", "Напряжение U", 1, 24, 1, "В"), range("resistance", "Сопротивление R", 20, 500, 10, "Ом")];
      visual = <Circuit voltage={v.voltage} resistance={v.resistance} current={v.voltage / v.resistance} />;
      formula = `I = U / R = ${format(v.voltage)} / ${format(v.resistance)}`;
      result = v.voltage / v.resistance; unit = "А";
      note = "При постоянном R удвоение U удваивает I. При постоянном U удвоение R уменьшает I вдвое. Модель: омический резистор при постоянной температуре и идеальный источник постоянного напряжения.";
  }

  return (
    <section className="lab" aria-label="Интерактивная лаборатория">
      <div className="lab-topline"><span className="lab-tag"><span aria-hidden="true">↗</span> ПОПРОБУЙТЕ САМИ</span><span className="lab-live"><i aria-hidden="true" />Интерактив</span></div>
      <h3 className="lab-title">{title}</h3>
      <p className="lab-lead">{lead}</p>
      <div className="lab-body"><div className="lab-visual">{visual}</div><div className="lab-controls">{controls}</div></div>
      <div className="lab-result" aria-live="polite" aria-atomic="true"><div><span className="lab-result-label">{result === null ? "Запомните направление" : "Результат расчёта"}</span><p className="lab-formula">{formula}</p></div>{result !== null && <strong>{format(result, 4)} <span>{unit}</span></strong>}</div>
      <p className="lab-note"><span aria-hidden="true">i</span>{note}</p>
      <p className="lab-safety">Учебная модель. Используйте её для расчётов; реальные опыты проводите только под руководством преподавателя на безопасном учебном оборудовании.</p>
    </section>
  );
}
