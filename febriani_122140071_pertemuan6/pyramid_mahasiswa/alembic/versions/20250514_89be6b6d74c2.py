"""create matakuliah table

Revision ID: 89be6b6d74c2
Revises: 6dda1df7d183
Create Date: 2025-05-14 19:47:16.371085

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '89be6b6d74c2'
down_revision = '6dda1df7d183'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('matakuliah',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('kode_mk', sa.Text(), nullable=False),
    sa.Column('nama_mk', sa.Text(), nullable=False),
    sa.Column('sks', sa.Integer(), nullable=False),
    sa.Column('semester', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_matakuliah')),
    sa.UniqueConstraint('kode_mk', name=op.f('uq_matakuliah_kode_mk'))
    )
    op.drop_table('mahasiswa')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('mahasiswa',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('nim', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('nama', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('jurusan', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('tanggal_lahir', sa.DATE(), autoincrement=False, nullable=True),
    sa.Column('alamat', sa.TEXT(), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='pk_mahasiswa'),
    sa.UniqueConstraint('nim', name='uq_mahasiswa_nim')
    )
    op.drop_table('matakuliah')
    # ### end Alembic commands ###
