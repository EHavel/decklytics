import { createBrowserHistory } from 'history'

const History = createBrowserHistory()
History.listen((location, action) => {
    let e = document.querySelector(".page-full")
    if (e) e.scrollTo(0, 0)

    window.scrollTo(0, 0)
})
export default History