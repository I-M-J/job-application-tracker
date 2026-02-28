// document.querySelectorAll('.job').forEach(job => job.hidden = true);

function displayTotalJobCount() {
    const jobList = document.querySelectorAll(".job:not(.interview)");
    // How to select element specifically not having hidden attribute or hidden class?
    const jobCount = jobList.length;

    const totalCountEl = document.getElementById('total-count');
    totalCountEl.textContent = jobCount;

    const availableJobsCountEl = document.getElementById('available-jobs-count');
    availableJobsCountEl.textContent = jobCount;
}

displayTotalJobCount();

const jobList = document.querySelectorAll(".job:not(.interview)");
// How to select element specifically not having hidden attribute or hidden class?
const jobCount = jobList.length;

const totalCountEl = document.getElementById('total-count');
totalCountEl.textContent = jobCount;

const availableJobsCountEl = document.getElementById('available-jobs-count');
availableJobsCountEl.textContent = jobCount;

const btnAll = document.getElementById('btn-all');
const btnInterview = document.getElementById('btn-interview');
const btnRejected = document.getElementById('btn-rejected');

btnAll.classList.remove('bg-white', 'text-[#64748B]');
btnAll.classList.add('bg-[#3B82F6]', 'text-white');
// How to replace multiple classes together?

if (jobCount === 0) {
    document.getElementById('blank-job').hidden = false;
}

function loadAll() {

}

document.getElementById('all').addEventListener('click', function (event) {
    console.log(event.target);

    const btn = event.target.closest('button');
    // How to capture the closest clicked parent element which is a button?
    if (!btn) return;

    const job = btn.closest('.job');

    if (btn.classList.contains('btn-trash')) {
        // How to select the element if it has a specific class name?
        job.remove();

        displayTotalJobCount()

    }
    else if (btn.classList.contains('btn-apply')) {
        btn.classList.toggle('clicked');
        btn.textContent = btn.classList.contains('clicked') ? 'APPLIED' : 'NOT APPLIED';
    }
    else if (btn.classList.contains('btn-interview')) {
        btn.classList.toggle('clicked');

        job.classList.add('interview');
    }
    else if (btn.classList.contains('btn-rejected')) {
        btn.classList.toggle('clicked');

        job.classList.add('rejected');
    }


    console.log(btn);

});
