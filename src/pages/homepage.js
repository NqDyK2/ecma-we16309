import NewsList from "../components/news-list";

const HomePage = {
    print() {
        return `
        <h1>Home Page</h1>
        <div class="news">
            ${NewsList.print()}
        </div>
        `;
    },
};

export default HomePage;