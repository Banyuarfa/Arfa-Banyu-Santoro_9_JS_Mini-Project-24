let i = 1;

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function handleSave() {
  const question = document.querySelector("#question");
  const option = document.querySelector("#option");
  const time = document.querySelector("#time");
  const table = document.querySelector("#table tbody");

  const tr = document.createElement("tr");
  const tr2 = document.createElement("tr");
  const noCol = document.createElement("td");
  const questionCol = document.createElement("td");
  const optionCol = document.createElement("td");
  const timeCol = document.createElement("td");

  const questionHead = document.querySelector("#question-head");

  const splitedOption = option.value.split(",");
  splitedOption.forEach((opt, index) => {
    const td = document.createElement("td");
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "option" + i;
    radio.id = opt + i;
    radio.value = opt;
    label.textContent = `${alphabet[index]}. ${opt}`;
    label.htmlFor = opt + i;

    td.appendChild(radio);
    td.appendChild(label);
    tr2.appendChild(td);
  });

  const endTime = new Date(Date.now() + time.value * 60 * 1000);

  let formattedMinutes;

  const timerInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = endTime - now;

    if (timeRemaining > 0) {
      const minutes = Math.floor(timeRemaining / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      const formattedTime = new Intl.DateTimeFormat("id-ID", {
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date(2024, 0, 1, 0, minutes, seconds));

      timeCol.textContent = formattedTime;
      formattedMinutes = formattedTime;
    } else {
      clearInterval(timerInterval);
      timeCol.textContent = "Waktu habis!";
    }
  }, 1000);

  // countDown(endTime, timeCol);

  noCol.textContent = i++;
  questionCol.textContent = question.value;
  optionCol.textContent = option.value;
  timeCol.textContent = formattedMinutes;

  questionHead.colSpan = splitedOption.length;
  questionCol.colSpan = splitedOption.length;
  noCol.rowSpan = 2;
  timeCol.rowSpan = 2;

  tr.appendChild(noCol);
  tr.appendChild(questionCol);
  tr.appendChild(timeCol);
  table.appendChild(tr);
  table.appendChild(tr2);
}
