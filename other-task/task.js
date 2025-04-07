// Реализовать на классах работу бытовой техники

// * 🛠️ Проект: Электрический чайник (ElectrikChaynik)
// * 📦 Цель: Реализовать класс, моделирующий работу умного электрического чайника
// *
// * ✅ Функционал:
//   * - Подключение/отключение к розетке (имитация питания)
// * - Подключение/отключение Bluetooth
// * - Долив воды в чайник (до макс. объема 2 л)
// * - Старт кипячения воды (с прогрессом и повышением температуры)
// * - Автоматическое отключение после закипания
// * - Остывание после кипячения (постепенное снижение температуры)
// * - Слив воды
// * - Вывод текущего состояния чайника (при включённом Bluetooth)
// * - Индикатор уровня воды
// *
// * 🧱 Свойства:
//   * - isPowered (boolean) — включён ли в розетку
// * - bluetooth (boolean) — активен ли Bluetooth
// * - currentVolume (number) — текущий объем воды
// * - maxVolume (number) — максимальный объем воды
// * - isBoiling (boolean) — идёт ли кипячение
// * - isDevice (boolean) — включён ли сам чайник
// * - progress (number) — процент кипячения (0–100)
// * - temperature (number) — текущая температура воды
// *
// * 🔧 Методы:
//   * - onPowered() / offPowered()
// * - onBluetooth() / offBluetooth()
// * - addVolume(water)
// * - onDevice()
// * - startCooling()
// * - drain()
// * - indicatorWater()
// * - statusDevice()

class ElectrikChaynik {
  constructor() {
    this.isPowered = false   // чайник в розетке
    this.maxVolume = 2;      // максимальный объём (например, 1.7 л)
    this.currentVolume = 0;  // текущий объём воды
    this.isBoiling = false;  // кипит ли сейчас
    this.isDevice = false;   // включён ли чайник
    this.progress = 0;       // прогресс кипячения чайника
    this.temperature = 0;    // температура чайника
    this.bluetooth = false   // включен ли блютуз
  }

  // подключить к розетке
  onPowered() {
    this.isPowered = true
    console.log("Чайник подключен к розетке");
  }

  // отключить из розетки
  offPowered() {
    this.isPowered = false
    this.bluetooth = false
    console.log("Чайник отключен к розетке");
  }

  //включить блютуз
  onBluetooth() {
    if (this.isPowered) {
      this.bluetooth = true
      console.log("Чайник подключен к блютузу");
    }
  }

  //отключить блютуз
  offBluetooth() {
    if (this.isPowered) {
      this.bluetooth = false
      console.log("Чайник отключен от блютуза");
    }
  }

  // налить воды (макс объем 2л)
  addVolume(water) {
    if (water <= this.maxVolume && this.currentVolume + water <= this.maxVolume ) {
      this.currentVolume = this.currentVolume + water
    } else {
      console.log("Осторожно! Вода выливается из чайника")
    }
  }

  // включить чайник
  onDevice() {
    if (!this.isPowered) {
      console.log("Чайник не в розетке!");
      return;
    }

    if (this.currentVolume <= 0) {
      console.log("Налейте воды!");
      return;
    }

    if (this.isBoiling || this.isBoiling) {
      console.log("Чайник уже работает!");
      return;
    }

    this.isDevice = true
    this.isBoiling = true;

    let progressInterval = setInterval(() => {
      this.progress = this.progress + 10
      this.temperature = this.temperature + 10
      console.log(`Кипячение... ${this.progress}%`)

      if (this.progress >= 100) {
        console.log('Чайник закипел')
        clearInterval(progressInterval)
        this.isDevice = false
        this.isBoiling = false;
        this.progress = 0
        this.startCooling()
      }
    },1000)
  }

  startCooling() {
    let temperatureInterval = setInterval(() => {
      this.temperature = this.temperature - 10
      console.log(`Чайник остывает ${this.temperature}%`)
      if (this.temperature === 0) {
        console.log("Чайник остыл!")
        clearInterval(temperatureInterval)
      }
    }, 1000)
  }

  // индикатор уровня воды
  indicatorWater() {
    console.log(`Объем воды в чайнике составляет ${this.currentVolume} литра`)
  }

  // слить воду
  drain() {
    this.currentVolume = 0
    console.log("Вода слита!")
  }

  // данные чайника
  statusDevice() {
    if (this.bluetooth) {
      console.log(`Объём: ${this.currentVolume} | Включён: ${this.isDevice} | Кипит: ${this.isBoiling} | Прогресс: ${this.progress}%`)
    } else {
      console.log("Включи bluetooth")
    }
  }

}

const chaynik = new ElectrikChaynik()
chaynik.onPowered()
chaynik.onBluetooth()
chaynik.addVolume(0.5)
chaynik.addVolume(0.5)
chaynik.addVolume(0.5)
chaynik.addVolume(0.5)
chaynik.indicatorWater()
chaynik.onDevice()
chaynik.onDevice()
chaynik.statusDevice()


