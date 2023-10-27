// ** React Redux
import { Provider } from "react-redux";
import { store } from "./store";

// ** React-Router-Dom
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/";



export const CalendarApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    )
}