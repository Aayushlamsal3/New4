 <script>
        let inputs=document.querySelector(".inp")
        let tasks=document.querySelector(".task")

        document.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            add();
        }
    });

        function add(){
            if(inputs.value == " "){
                alert("Please Enter some Task....")
            }else{
                let newtask=document.createElement("ul")
            newtask.innerHTML=`${inputs.value}<i class="fa-solid fa-delete-left"></i><i class="fa-solid fa-pen-to-square"></i></i>`
            tasks.appendChild(newtask)
            inputs.value=" "
                function removeTask(){
                    newtask.remove()
                }

    function edit(){
                let e=prompt("What to you want to write?")
                newtask.firstChild.textContent=e
            }

                newtask.querySelector(".fa-delete-left").addEventListener("click",removeTask)
                newtask.querySelector(".fa-pen-to-square").addEventListener("click",edit)
            }
        }
    </script>
