const rangeSlider = document.querySelector('#range-slider-1');

if(rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [86, 100000],
        connect: true,
        step: 1,
        range: {
            'min': [86],
            'max': [100000]
        }
    });

    const input1 = document.querySelector('#input1')
    const input2 = document.querySelector('#input2')
    const inputs = [input1, input2]

    rangeSlider.noUiSlider.on('update', function(values, handle) {
        inputs[handle].value = Math.round(values[handle])
    })


    const setRangeSlider = (i, value) => {
        let arr = [null, null]
        arr[i] = value

        rangeSlider.noUiSlider.set(arr)
    }

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value)
        })
    })
}

//Слайдер в modal

const rangeSlider2 = document.querySelector('#range-slider-2');

if(rangeSlider2) {
    noUiSlider.create(rangeSlider2, {
        start: [86, 100000],
        connect: true,
        step: 1,
        range: {
            'min': [86],
            'max': [100000]
        }
    });

    const input3 = document.querySelector('#input3')
    const input4 = document.querySelector('#input4')
    const inputsArr = [input3, input4]

    rangeSlider2.noUiSlider.on('update', function(values, handle) {
        inputsArr[handle].value = Math.round(values[handle])
    })


    const setRangeSlider2 = (i, value) => {
        let arr = [null, null]
        arr[i] = value

        rangeSlider2.noUiSlider.set(arr)
    }

    inputsArr.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider2(index, e.currentTarget.value)
        })
    })
}