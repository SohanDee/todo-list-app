import $ from 'jquery';

const taskInput = $('form#add-task #task-input');
const button = $('#add-task button');
const table = $('table');
let active;

$('form#add-task').on('submit', (e) => {
    e.preventDefault();
    const task = taskInput.val();
    taskInput.val("");
    if (button.text() === 'ADD') {
        $('#todo-table > tbody').append(`
        <tr class="align-middle">
            <td class="w-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox">
                </div>
            </td>
            <td class="w-70 fs-4">${task}</td>
            <td class="w-10 text-center"><i class="bi bi-pencil-fill fs-4"></i></td>
            <td class="w-10 text-center"><i class="bi bi-trash-fill fs-4"></i></td>
        </tr>
    `);
    } else if (button.text() === 'UPDATE') {
        active.children('td').eq(1).text(task);
        $('#add-task button').text('ADD');
    }
});

table.on('click', (e) => {
    $('table > tbody').children('tr').removeClass('table-active');
    $(e.target).parents('tr').addClass('table-active');
    if (e.target.classList.contains('bi-pencil-fill')) {
        active = $(e.target).parents('tr');
        taskInput.val($(e.target).parents('td').prev().text());
        $('#add-task button').text('UPDATE');
    } else if (e.target.classList.contains('bi-trash-fill')) {
        $(e.target).parents('tr').remove();
    }
})

table.on('change', (e) => {
    if (e.target.checked) {
        $(e.target).parents('td').next().toggleClass('text-decoration-line-through');
        $('#done-table > tbody').append($(e.target).parents('tr').clone(true));
        $(e.target).parents('tr').remove();
    } else if (!e.target.checked) {
        $(e.target).parents('td').next().toggleClass('text-decoration-line-through');
        $('#todo-table > tbody').append($(e.target).parents('tr').clone(true));
        $(e.target).parents('tr').remove();
    }
})

$('#night-mode input').on('change', (e) => {
    if (e.target.checked) {
        $('html').attr('data-bs-theme', 'dark');
    } else {
        $('html').attr('data-bs-theme', 'light');
    }
})