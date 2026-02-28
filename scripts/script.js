// document.querySelectorAll('.job').forEach(job => job.hidden = true);

function displayTotalJobCount() {
    const jobList = document.querySelectorAll(".job");
    // How to select element specifically not having hidden attribute or hidden class?
    const jobCount = jobList.length;

    const totalCountEl = document.getElementById('total-count');
    totalCountEl.textContent = jobCount;

    const availableJobsCountEl = document.getElementById('available-jobs-count');
    availableJobsCountEl.textContent = jobCount;

    return jobCount;
}

function displayInterviewCount() {
    const interviewList = document.querySelectorAll(".job.interview");
    const interviewCount = interviewList.length;

    const interviewCountEl = document.getElementById('interview-count');
    interviewCountEl.textContent = interviewCount;

    return interviewCount;
}

function displayRejectedCount() {
    const rejectedList = document.querySelectorAll(".job.rejected");
    const rejectedCount = rejectedList.length;

    const rejectedCountEl = document.getElementById('rejected-count');
    rejectedCountEl.textContent = rejectedCount;
}

const jobCount = displayTotalJobCount();

if (jobCount === 0) {
    document.getElementById('blank-job').hidden = false;
}

const btnAll = document.getElementById('btn-all');
const btnInterview = document.getElementById('btn-interview');
const btnRejected = document.getElementById('btn-rejected');



function loadAll() {
    
    // How to replace multiple classes together?
}

function loadInterview() {
    const interview = document.getElementById('interview');

    interview.hidden = false;

    interviewList = 


}

loadAll();

let activeTabBtn = document.getElementById('btn-all');
activeTabBtn.classList.add('active');

const tabBtnContainerEl = document.getElementById('tab-btn-container');
tabBtnContainerEl.addEventListener('click', function (event) {
    const btn = event.target.closest('button');

    if (!btn) return;

    activeTabBtn.classList.remove('active');

    btn.classList.add('active');

    activeTabBtn = btn;

    if (btn.id = 'btn-all') {
        console.log("Yes");
    }
    else if (btn.id = 'btn-interview') {

    }
    else if (btn.id = 'btn-rejected') {

    }

});

document.getElementById('all').addEventListener('click', function (event) {
    console.log(event.target);

    const btn = event.target.closest('button');
    // How to capture the closest clicked parent element which is a button?
    if (!btn) return;

    const job = btn.closest('.job');

    if (btn.classList.contains('btn-trash')) {
        // How to select the element if it has a specific class name?
        job.remove();

        const jobCount = displayTotalJobCount();

        if (jobCount === 0) {
            document.getElementById('blank-job').hidden = false;
        }
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
});

