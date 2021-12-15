export interface DataRepository {
    name: string;
    owner: {
        avatar_url: string;
        login: string;
        url: string;
    };
    size: number;
    updated_at: string;
    clone_url: string;
    description: string;
}
