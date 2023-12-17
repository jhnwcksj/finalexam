import React from 'react';
import './ForumPage.css';

const ForumPage = () => {
  const forumData = [
    { id: 1, title: 'General', content: 'News and some updates that don\'t make the main page. (6 users browsing)' },
    { id: 2, title: 'News and Updates', content: 'Post videos and pics from inside the game. (6 users browsing)' },
    { id: 3, title: 'Plugin Development', content: 'Server plugins release and discussion. (12 users browsing)' },
    { id: 4, title: 'About', content: 'Everything that\'s anything, and anything that\'s everything.'},
    { id: 5, title: 'Scripting Help', content: 'Discussion and help related to creating scripts. (267 users browsing)'},
    { id: 6, title: 'Gamemode Scripts', content: 'A place to find or release server gamemode scripts. (10 users browsing)'},
  ];

  return (
    <div>
      <h1>Форум</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {forumData.map((topic) => (
            <tr key={topic.id} className="topic">
              <td>{topic.id}</td>
              <td>{topic.title}</td>
              <td>{topic.content}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {/* <td colSpan="3">Footer content if needed</td> */}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ForumPage;


// import React from 'react';
// import './ForumPage.css';

// const ForumPage = () => {
//   const forumData = [
//     { id: 1, title: 'General', content: 'News and some updates that don\'t make the main page. (6 users browsing)' },
//     { id: 2, title: 'News and Updates', content: 'Post videos and pics from inside the game. (6 users browsing)' },
//     { id: 3, title: 'Plugin Development', content: 'Server plugins release and discussion. (12 users browsing)' },
//   ];

//   return (
//     <div>
//       <h1>Форум</h1>
//       <div>
//         {forumData.map((topic) => (
//           <div key={topic.id} className="topic">
//             <br></br>
//             <h2>{topic.title}</h2>
//             <p>{topic.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ForumPage;