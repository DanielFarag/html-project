const aboutEducation = document.getElementById("educationLoan");
const aboutEducationList = [
  {
    title: "Eligibility Criteria",
    benefits: [
      "Resident Of country",
      "Required age of 16 and 35",
      "Your post completion of Certifiace",
      "Write your eligibility criteria",
      "Write your eligibility criteria Content",
    ],
    icon: `<i class="fa-regular fa-circle-check text-success"></i>`,
  },
  {
    title: "Documentes needs",
    benefits: [
      "Passport",
      "Voter ID card",
      "Driving license",
      "PAN card",
      "Bank account statement",
      "Latest electricity bill",
      "Latest mobile/telephone bill",
      "Existing house lease agreement",
    ],
    icon: `<i class="fa-regular fa-circle-check text-success"></i>`,
  },

  {
    title: "Download Forms",
    benefits: [
      "Education Loan Application form",
      "Education Loan Agreement",
      "Income Certificate Issuing Authority",
      "Download Form Link",
      "Download Form Link",
    ],
    icon: `<i class="fa-regular fa-file-pdf text-danger"></i>`,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const content = `
        <div class = "container">
            <h3 class = "title">About Education Loan</h3>
            <p class = "subTitle">No matter how long the educational path is, ease it with Borrow Education Loan. Borrow Bank Education Loan provides you with quick and completely transparent loans to fuel your future aspirations and dreams.</p>
            <div class = "row">
                ${aboutEducationList
                  .map(({ title, benefits, icon }) => {
                    return ` <div class = "col-sm-12 col-md-6 col-4 p-3">
                              <div class = "educationLoanCards">
                              <h3 class = "cardTitle">${title}</h3>
                              <ul >${benefits
                                .map((el) => `<li>${icon}${el}</li>`)
                                .join("")}</ul>    
                              </div>
                                
                        </div>`;
                  })
                  .join("")}
            </div>
        </div>
    `;

  aboutEducation.innerHTML = content;
});
