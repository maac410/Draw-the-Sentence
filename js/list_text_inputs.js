export {list_text_inputs};

function list_text_inputs(input_name, number, cont_id, message) {
    let container = document.getElementById(cont_id);

    let existing = container.querySelectorAll(`input[name="${input_name}"]`);

    for (let i = existing.length - 1; i >= number; i--) {
        existing[i].remove();
    }

    for (let i = existing.length + 1; i <= number; i++) {
        let input = document.createElement("input");

        input.type = "text";
        input.name = input_name;
        input.placeholder = message + " " + i;
        input.required = true;
        container.appendChild(input);
    }
}