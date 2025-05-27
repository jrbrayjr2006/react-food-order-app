export default function Error({ error }: { error: string | null }) {
    if (!error) {
        return null;
    }

    return (
        <div className="error">
            <h2>Error</h2>
            <p>{error}</p>
        </div>
    );
}