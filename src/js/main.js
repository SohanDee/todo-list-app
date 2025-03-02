import $ from 'jquery';
const taskInput = $('form#add-task #task-input');

$('form#add-task').on('submit', (e) => {
    e.preventDefault();
    const task = taskInput.val();
    taskInput.val("");
    console.log(task);
    $('#todo-table > tbody').append(`
        <tr class="align-middle">
            <td class="w-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault"></label>
                </div>
            </td>
            <td class="w-70">${task}</td>
            <td class="w-10 text-center"><i class="bi bi-pencil-fill fs-4"></i></td>
            <td class="w-10 text-center"><i class="bi bi-trash-fill fs-4"></i></td>
        </tr>
    `);

})