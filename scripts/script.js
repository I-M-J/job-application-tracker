let jobs = document.getElementsByClassName('job');
// console.log(jobs);

// const oldJobs = document.querySelectorAll('.job');

// for (const job of oldJobs) {
//     job.hidden = true;
// }

function displayTotalJobCount() {
    // const jobList = document.querySelectorAll(".job");
    // How to select element specifically not having hidden attribute or hidden class?
    const jobCount = jobs.length;

    const totalCountEl = document.getElementById('total-count');
    totalCountEl.textContent = jobCount;

    const availableJobsCountEl = document.getElementById('available-jobs-count');
    availableJobsCountEl.textContent = jobCount;

    return jobCount;
}

function displayInterviewCount() {
    let interviewCount = 0;

    for (const job of jobs) {
        if (job.classList.contains('interview')) {
            interviewCount++;
        }
    }

    const interviewCountEl = document.getElementById('interview-count');
    interviewCountEl.textContent = interviewCount;
}

function displayRejectedCount() {
    let rejectedCount = 0;

    for (const job of jobs) {
        if (job.classList.contains('rejected')) {
            rejectedCount++;
        }
    }

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

const all = document.getElementById('all');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');

// function loadAll() {


//     // for (const job of jobs) {
//     //     all.appendChild(job);
//     // }

//     // How to remove all the child elements from a parent element?
//     // How to replace multiple classes together?
// }



// function loadInterview() {
//     for (const job of jobs) {
//         if (job.classList.contains('interview')) {
//             interview.appendChild(job);
//         }
//     }
// }

// function showInterview() {
//     all.hidden = true;
//     interview.hidden = false;
//     rejected.hidden = true;

//     loadInterview();
// }


// function loadRejected() {
//     for (const job of jobs) {
//         if (job.classList.contains('rejected')) {
//             rejected.appendChild(job);
//         }
//     }
// }

// function showRejected() {
//     all.hidden = true;
//     interview.hidden = true;
//     rejected.hidden = false;

//     loadRejected();
// }

// loadAll();

let activeTabBtn = document.getElementById('btn-all');
activeTabBtn.classList.add('active');

function loadScreen() {

    if (activeTabBtn.id === 'btn-all') {
        for (const job of jobs) {
            job.hidden = false;
        }

        document.getElementById('of-jobs').hidden = true;
    }
    else if (activeTabBtn.id === 'btn-interview') {
        for (const job of jobs) {
            if (job.classList.contains('interview')) {
                job.hidden = false;
            }
            else {
                job.hidden = true;
            }
        }

        document.getElementById('of-jobs-count').textContent = document.getElementById('interview-count').textContent;
        document.getElementById('of-jobs').hidden = false;
    }
    else if (activeTabBtn.id === 'btn-rejected') {
        for (const job of jobs) {
            if (job.classList.contains('rejected')) {
                job.hidden = false;
            }
            else {
                job.hidden = true;
            }
        }

        document.getElementById('of-jobs-count').textContent = document.getElementById('rejected-count').textContent;
        document.getElementById('of-jobs').hidden = false;
    }

}

const tabBtnContainerEl = document.getElementById('tab-btn-container');
tabBtnContainerEl.addEventListener('click', function (event) {
    const btn = event.target.closest('button');

    if (!btn) return;

    activeTabBtn.classList.remove('active');

    btn.classList.add('active');

    activeTabBtn = btn;

    loadScreen();
});

const section = document.getElementById('all');

section.addEventListener('click', function (event) {
    // console.log(event.target);

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

        displayInterviewCount();
        displayRejectedCount();
    }
    else if (btn.classList.contains('btn-apply')) {
        btn.classList.toggle('clicked');
        btn.textContent = btn.classList.contains('clicked') ? 'APPLIED' : 'NOT APPLIED';
    }
    else if (btn.classList.contains('btn-interview')) {
        btn.classList.toggle('clicked');

        job.classList.toggle('interview');

        job.querySelector('.btn-rejected').classList.remove('clicked');

        job.classList.remove('rejected');

        loadScreen();

        displayInterviewCount();
        displayRejectedCount();
    }
    else if (btn.classList.contains('btn-rejected')) {
        btn.classList.toggle('clicked');

        job.classList.toggle('rejected');

        job.querySelector('.btn-interview').classList.remove('clicked');

        job.classList.remove('interview');

        loadScreen();

        displayInterviewCount();
        displayRejectedCount();
    }
});


