// First, we start a transaction and save it into a variable
const transaction       = await require('../../config/db').sequelize.transaction();

try {

    // Then, we do some calls passing this transaction as an option:

    const user = await User.create({
        firstName: 'Bart',
        lastName: 'Simpson'
    }, { transaction: transaction });

    await user.addSibling({
        firstName: 'Lisa',
        lastName: 'Simpson'
    }, { transaction: transaction });

    // If the execution reaches this line, no errors were thrown.
    // We commit the transaction.
    await transaction.commit();

} catch (error) {

    // If the execution reaches this line, an error was thrown.
    // We rollback the transaction.
    await transaction.rollback();
}