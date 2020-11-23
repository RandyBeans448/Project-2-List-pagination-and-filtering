//Creating global varibles to obtain the list items from the HTML
const list = document.querySelector('.student-list');
const listChildren = list.children;
//Setting out the max about li to show per page
const maxPerPage = 10;
//Creating the correct amount of pages for the li limit for each page
const pageNum = Math.ceil(listChildren.length/maxPerPage);

// Create search bar and button./////////////////////////////////////////////
const pageHeader = document.getElementsByClassName('page-header cf')[0];
const searchBar = document.createElement('input');
searchBar.placeholder = 'Search'
searchBar.type = 'text';
pageHeader.appendChild(searchBar);
searchBar.className = 'student-search';
////////////////////////////////////////////////////////////////////////////


/*
This function creates a start and end index and loops through
the li to display only 10 item per page.
*/


const showPage = (pageNum, listChildren) => {
   let startIndex = (pageNum * maxPerPage) - maxPerPage;
   let endIndex = pageNum * maxPerPage;
   for (let i = 0; i < listChildren.length; i ++) {
      if (i >= startIndex && i <= endIndex) {
         listChildren[i].style.display = 'block';
       } else {
         listChildren[i].style.display = 'none';
      }
    }
  };

  //calling the function
      showPage(1, listChildren);


//This function creates links to cycle though each page on the site.

const addPaginationLinks = (listChildren) => {
  const pageNum1 = Math.ceil(listChildren.length/maxPerPage);
  const listDiv = document.querySelector('div');
  const div = document.createElement('div');
        div.setAttribute('class', 'pagination');
        listDiv.appendChild(div);
        const ul = document.createElement('ul');
        div.appendChild(ul);
           for (let i = 0; i < pageNum1; i += 1) {
                if (i != pageNum1) {
                let li = document.createElement('li');
                ul.appendChild(li);
                const a = document.createElement('a');
                a.href = "#";
                a.textContent = (i + 1);
                    if (i ===  0) {
                    a.setAttribute('class', 'active');
                    }
                li.appendChild(a);
               }
              }
             };


addPaginationLinks(listChildren);

//This function makes the pagination buttons change color when on that page
  const clicks = (listChildren) => {
    const anchor = document.getElementsByTagName('a');
    for (let i = 0; i < anchor.length; i ++) {
      anchor[i].addEventListener('click', (event) => {
        for(let j = 0; j < anchor.length; j += 1) {
            anchor[j].className = "";
          }
       showPage(anchor[i].textContent, listChildren);
        event.target.className = "active";

     })
    }
  };

  clicks(listChildren);

/*
Using a key up event to create a search function for the student list
*/

const searchInput = document.getElementsByClassName('student-search')[0];
const button = document.getElementsByClassName('search-button')[0];


searchInput.addEventListener('keyup', filter) 
  function filter () {
    const studentList = document.querySelectorAll('li');
      for(let i = 0; i < studentList.length; i ++) {
        let studentName = studentList[i].firstElementChild.textContent;
        console.log(studentName)
        if(studentName.toUpperCase().includes(searchInput.value.toUpperCase())) {
          studentList[i].style.display = '';
        } else {
          studentList[i].style.display = "none";
        }
      }
  };
