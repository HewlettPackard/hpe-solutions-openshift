
import logging

logger = logging.getLogger()
update_logger = logging.getLogger()


def log_debug(message):
    """function to log debug messages """
    logger.debug(message)


def log_info(message):
    """function to log info messages """
    logger.info(message)


def log_warn(message):
    """function to log warning messages """
    logger.warn(message)


def log_error(message):
    """function to log error messages"""
    logger.error(message)


def lexception(message):
    """function to log exception messages"""
    logger.exception(message)


def log_print(message):
    log_info(message)
    print(message)
