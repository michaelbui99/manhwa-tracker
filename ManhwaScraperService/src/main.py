from manhwa_dao import ManhwaDAO

dao = ManhwaDAO()
manhwas = dao.get_manhwas()
manhwa = dao.get_manhwa_by_id(2)
print(manhwa)
