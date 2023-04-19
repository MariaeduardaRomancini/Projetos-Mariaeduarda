    const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
  }

  setInterval(() => {
    getHours()
  }, 1000)

  const miliseg = document.querySelector('.milissegundos')
  const seg = document.querySelector('.segundos')
  const min = document.querySelector('.minutos')

  let miliNum = 0
  let segNum = 0
  let minNum = 0
  let INTERVALO

  function milissegundos() {
    miliNum++
    if (miliNum < 10) {
      miliseg.innerHTML = '0' + miliNum
    } else {
      miliseg.innerHTML = miliNum
    }

    if (miliNum == 99) {
      miliNum = 0
      segundos()
    }
  }

  function segundos() {
    segNum++
    if (segNum < 10) {
      seg.innerHTML = '0' + segNum
    } else {
      seg.innerHTML = segNum
    }

    if (segNum == 59) {
      segNum = 0
      minutos()
    }
  }

  function minutos() {
    minNum++
    if (minNum < 10) {
      min.innerHTML = '0' + minNum
    } else {
      min.innerHTML = minNum
    }
  }

  function iniciar() {
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
      milissegundos()
    }, 10)
  }

  function parar() {
    clearInterval(INTERVALO)
  }

  function resetar() {
    clearInterval(INTERVALO)
    miliNum = 0
    segNum = 0
    minNum = 0
    miliseg.innerHTML = '00'
    seg.innerHTML = '00'
    min.innerHTML = '00'
  }