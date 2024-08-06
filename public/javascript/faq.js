// Example of dynamically loading FAQ content

// const form = document.getElementsByClassName('comment-form');
Array.from(document.getElementsByClassName('fa-comment')).forEach(c=>{
console.log(c)
c.addEventListener('click', event => {
                 event.preventDefault();
               
               const targetId=c.getAttribute('data-content');
               console.log(targetId);
               const form=document.getElementById(targetId);
               console.log(form);
                 form.style.display = form.style.display === 'block' ? 'none' : 'block';    

        })
        // Array.from(document.getElementsByClassName('comment-form')).forEach(f=>{
        //     console.log(f.getAttribute('data-content'))
       
    }) 
// })   
//     comment.addEventListener('click', event => {
//             event.preventDefault();
//             console.log('working',comment);
//     }
//         )
//         })

    // .forEach(comment => {
    //     comment.addEventListener('click', event => {
    //         event.preventDefault();
    //         console.log('working');

    //         // Remove active class from all content sections
    //         form.forEach(f => {
    //             f.style.display = 'none';
    //         });

    //         // Get the target content section and display it
    //         const targetId = comment.getAttribute('data-content');
    //         console.log(targetId);
    //         document.getElementById(targetId).style.display = form.style.display === 'block' ? 'none' : 'block';
    //     });
    // });





const faqContent = document.getElementById('faq-content');

const faqs = [
    {
        question: 'How do I apply for a work permit?',
        answer: 'Third-country nationals who receive a job offer from a company registered and operating in Malta are eligible to apply for a Single Permit that enables them to be employed in the job specified on the application.The Single Permit applications may only be submitted by the employer'
    },
    
    {
        question:'How do Social Security benefits work and how can I qualify?',
        answer:'The contributory scheme of social security in Malta is a system where an employee or self-employed person pays a weekly contribution as laid down by the Social Security Act (Cap. 318.). The social security contributions paid during the period in which a person is gainfully active is used to finance contingencies that may arise such as sickness, unemployment or retirement as required.'
    },
    {
        question: 'How to apply for a driving license in Malta?',
        answer: 'Identify an Instructor > Apply for a Learner’s Permit through Transport Malta website > Apply for the Theory Test > Start Learning > Apply for the Practical Test through driving school'
    },
    {
        question: 'Whats Get Qualified Scheme?',
        answer: 'GET QUALIFIED is an initiative that supports the personal development of individuals for the achievement of qualifications and certifications required by industry. The incentive is applicable to individuals following a course of studies leading to a certification, diploma, degree or post-graduate degree courses. Upon successful completion the student will benefit from a tax credit enabling them to recover part of the costs incurred.'
    },
    {
        question: 'What is a Skillcard and how can I get one?',
        answer: 'The Skills Pass is a verification process initiated by the Government of Malta that allows skilled individuals in the Tourism and Hospitality sector to gain recognition for their skills and be able to work in Malta in this industry'
    },
    {
        question:'How much is the fees for Skillcard',
        answer:'If you are applying from abroad fees is -€475,Living In Malta Less than a Year(First Renewal of the residence card)-€455, Living In Malta More than a Year(From the second Renewal of the residence card)-€375'
    },
    {
        question:'Is the Skills Pass permanent or does it have to be renewed',
        answer:'Once you obtain the full Skills Pass it is permanent for that particular occupation'
    },
    {
        question:'Would I need a new Skills Pass if I change my job but remain within the Hospitality and Tourism industry?',
        answer:'If you change jobs but remain with the same occupation then the Skills Pass will remain valid. However, if you change jobs and start working in a different occupation within the Hospitality and Tourism sector, then you would have to do the exam for that occupation and once you obtain the Skills Pass for that occupation it is also permanent. The price for an additional occupation is €107.50'
    }



];

faqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
        <h3>${faq.question}</h3>
        <p>${faq.answer}</p>
    `;
    faqContent.appendChild(faqItem);

    faqItem.querySelector('h3').addEventListener('click', () => {
        const answer = faqItem.querySelector('p');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
  // <,,,,,,,,,,Hamburger..........>
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});