function esCopo() {
    const iniciar = document.querySelector('.start')
    const perguntasQuestion = document.querySelector('.container')
    let acumulador = 0;



    function createForm() {
        const h = document.createElement('h1');
        h.innerHTML = 'Por que davi e lindo?'
        perguntasQuestion.appendChild(h)
        h.setAttribute('class', 'pergunta')
        const form = document.createElement('form') // create form
        perguntasQuestion.appendChild(form)
        form.setAttribute('class', 'form')




        const input = document.createElement('input');  // create input
        input.type = 'radio';
        const alternativas = document.querySelector('.form')
        alternativas.appendChild(input)
        const label = document.createElement('label');  // create label
        input.setAttribute('name', 'question')
        input.setAttribute('value', 'option-1')
        form.appendChild(label)
        label.innerText = 'E o davi né pae fazer oque'




        const br = document.createElement('br')
        alternativas.appendChild(br)


        const input2 = document.createElement('input');  // create input
        input2.type = 'radio';
        const alternativas2 = document.querySelector('.form')
        alternativas2.appendChild(input2)
        const label2 = document.createElement('label');  // create label
        input2.setAttribute('name', 'question')
        input2.setAttribute('value', 'option-2')
        form.appendChild(label2)
        label2.innerText = 'Já nasceu lindo não jeito'




        const br2 = document.createElement('br')
        alternativas.appendChild(br2)

        const input3 = document.createElement('input');  // create input
        input3.type = 'radio';
        const alternativas3 = document.querySelector('.form')
        alternativas3.appendChild(input3)
        const label3 = document.createElement('label');  // create label
        input3.setAttribute('name', 'question')
        input3.setAttribute('value', 'option-3')
        form.appendChild(label3)
        label3.innerText = 'usa produtos ivone'




        const br3 = document.createElement('br')
        alternativas.appendChild(br3)

        const input4 = document.createElement('input');  // create input
        input4.type = 'radio';
        const alternativas4 = document.querySelector('.form')
        alternativas4.appendChild(input4)
        const label4 = document.createElement('label');  // create label
        input4.setAttribute('name', 'question')
        input4.setAttribute('value', 'option-4')
        form.appendChild(label4)
        label4.innerText = 'exquesa né só vapo vapo'




        const br4 = document.createElement('br')
        alternativas.appendChild(br4)
        const button = document.createElement('button')
        button.innerText = 'enviar'
        button.setAttribute('class', 'proxima')
        button.style.alignItems = 'center'
        form.appendChild(button)

        let radioBtns = document.querySelectorAll("input[name= 'question']");

        let findSelected = () => {
            let result = document.querySelector("input[name='question']:checked").value;

            function calcularResult() {
                const proxima = document.querySelector('.proxima')
                proxima.addEventListener('click', function (e) {
                    e.preventDefault();
                    form.remove()
                    let erros = 0;
                    if (result === `option-2`) {
                        acumulador = 1
                        console.log(acumulador)
                        h.innerHTML = `acertou ${acumulador}/1`
                        h.style.backgroundColor = '#00ff2f'
                    } else{
                        erros = 1
                        h.innerHTML = `errou ${erros}/1`
                        h.style.backgroundColor = 'red'
                    }
                })
            } 
            
            calcularResult()


        }
                
                

        radioBtns.forEach(radioBtn => {
            radioBtn.addEventListener("change", findSelected)
        })





    }




    iniciar.addEventListener('click', function () {
        function clearStart() {
            iniciar.remove();

        }
        setTimeout(clearStart, 1000);

        function createQuestion() {
            return createForm;

        } setTimeout(createQuestion(), 2000);


    })
}


esCopo()