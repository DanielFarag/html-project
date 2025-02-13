const educationInterest = document.getElementById("educationInterest");
const educationInterestList = [
  {
    title: "Description of Charges",
    subTitle: "Education Loan",
  },
  {
    title: "Loan Processing Charges",
    subTitle: "Maximum up to 1%",
  },
  {
    title: "Pre-payment charges*",
    subTitle: "Nil",
  },
  {
    title: "No Due Certificate",
    subTitle: "Nil",
  },
  {
    title: "Solvency Certificate",
    subTitle: "Nil",
  },
  {
    title: "Penalty Interest on delayed / overdue EMI",
    subTitle: "Write here your % of delayed payment",
  },
];
const precentages = [
  {
    precent: "8.75%",
    caption: "Min apr",
  },
  {
    precent: "10.75%",
    caption: "Max apr",
  },
  {
    precent: "12.10%",
    caption: "Avg apr",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const content = `
        <div class = "container">
            <h3 class = "title">Education Interest Rates & Charges</h3>
            <p class = "subTitle">Here is an exhaustive list of all the fees and charges to be paid for the education loan. Sollicitudin um placerat</p>
            <div class = "row testimonialsContainer">
                <div class = "col-3 col-md-6 col-sm-12 my-4">
                    ${precentages
                      .map(({ precent, caption }) => {
                        return `<div class = "precentCard my-2" > <p class ="precent">${precent}</p> <p class = "caption"> ${caption}</p></div>`;
                      })
                      .join("")}
                </div>
                     <div class = "col-sm-12 col-md-6 col-9 my-4">
                         ${educationInterestList
                           .map(({ title, subTitle }) => {
                             return `
                                <div class = "educationIntersetItem row"> 
                                    <div class = "col-sm-12 col-md-6 col-6">
                                        <p> ${title}</p>
                                    </div> 
                                    <div class = "col-sm-12 col-md-6 col-6">
                                        <p> ${subTitle}</p>
                                    </div>
                                </div>`;
                           })
                           .join("")}      
                        </div>
            </div>
        </div>
    `;

  educationInterest.innerHTML = content;
});
