const App = () => {
    return (
        <div>
            <Tweet
            name="Chris Daly"
            username="CoachC"
            date= {new Date().toDateString()}
            message='Give this one your ALL!'
            />
            <Tweet
            name="Kylan Turner"
            username="FriendKy"
            date= {new Date().toDateString()}
            message='Believe in yourself!'
            />
            <Tweet
            name="Danielle Leffler"
            username="LittleD"
            date= {new Date().toDateString()}
            message='I will be your friend FOREVER!'
            />
        </div>
    );
}