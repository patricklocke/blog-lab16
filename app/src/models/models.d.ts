declare module models {
    interface IBlogPost {
        title: string;
        author: string;
        content: string;
        createdAt?: Date;
        id?: string;
    }
}
