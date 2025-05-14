from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah

@view_config(route_name='matakuliah_list', renderer='json')
def matakuliah_list(request):
    dbsession = request.dbsession
    items = dbsession.query(Matakuliah).all()
    return {'matakuliah': [m.to_dict() for m in items]}

@view_config(route_name='matakuliah_detail', renderer='json')
def matakuliah_detail(request):
    dbsession = request.dbsession
    id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=id).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Data tidak ditemukan'})
    return {'matakuliah': mk.to_dict()}

@view_config(route_name='matakuliah_add', request_method='POST', renderer='json')
def matakuliah_add(request):
    try:
        data = request.json_body
        mk = Matakuliah(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=data['sks'],
            semester=data['semester']
        )
        request.dbsession.add(mk)
        request.dbsession.flush()
        return {'success': True, 'matakuliah': mk.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matakuliah_update', request_method='PUT', renderer='json')
def matakuliah_update(request):
    dbsession = request.dbsession
    id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=id).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Data tidak ditemukan'})
    data = request.json_body
    for field in ['kode_mk', 'nama_mk', 'sks', 'semester']:
        if field in data:
            setattr(mk, field, data[field])
    return {'success': True, 'matakuliah': mk.to_dict()}

@view_config(route_name='matakuliah_delete', request_method='DELETE', renderer='json')
def matakuliah_delete(request):
    dbsession = request.dbsession
    id = request.matchdict['id']
    mk = dbsession.query(Matakuliah).filter_by(id=id).first()
    if not mk:
        return HTTPNotFound(json_body={'error': 'Data tidak ditemukan'})
    dbsession.delete(mk)
    return {'success': True, 'message': f'Matakuliah id {id} berhasil dihapus'}
