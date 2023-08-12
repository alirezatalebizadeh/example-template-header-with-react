import Header1 from "./Components/Header1/Header1";
import Header2 from "./Components/Header2/Header2";
import Header3 from './Components/Header3/Header3'
import Header4 from './Components/Header4/Header4'
let routes = [
    { path: '/*', element: <Header1 /> },
    { path: '/header2', element: <Header2 /> },
    { path: '/header3', element: <Header3 /> },
    { path: '/header4', element: <Header4 /> }
]


export default routes