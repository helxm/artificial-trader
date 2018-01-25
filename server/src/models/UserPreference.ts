import User from './User';
import Rule from './Rule';
import Currency from "./Product/CryptoProduct";

class UserPreference {
    public user: User;
    public activeRules: Array<Rule>;
    public ownedRules: Array<Rule>;
}

export default UserPreference;