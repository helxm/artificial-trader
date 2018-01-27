/**
 * Order related enums
 */
const OrderStatus =  {FILLED: 'FILLED', PENDING: 'PENDING', REJECTED: 'REJECTED', CANCELLED: 'CANCELLED'};
const OrderType = {BUY: 'BUY', SELL: 'SELL'};
const TimeRange = {HOUR: 'HOUR', DAY: 'DAY', WEEK: 'WEEK', MONTH: 'MONTH', YEAR: 'YEAR'};
const ChannelType = {
    TICKER: 'ticker',           // provides real-time price updates every time a match happens
    HEARTBEAT: 'heartbeat',     // includes sequence and last trade ids that can be used to verify no messages were missed.
    LEVEL2: 'level2',           // snapshot of the order book
    USER: 'user',               // contains messages that include the authenticated user
    MATCHES: 'matches',         // match messages
    FULL: 'full',               // real-time updates on orders and trades
};
module.exports = {OrderType, OrderStatus, TimeRange, ChannelType};