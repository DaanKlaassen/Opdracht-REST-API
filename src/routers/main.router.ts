import express from "express";
import { mainController } from "../controllers/main";

const mainRouter = express.Router();

class MainRouter {
    public router: express.Router;
    private mainController: mainController | undefined;

    constructor() {
        this.router = mainRouter;
        this.mainController = new mainController();
    }
}

mainRouter.get("/", (req, res) => {
    mainController.getAPI().then((response) => {
        res.send(response.data);
    });
});

export default new MainRouter().router;